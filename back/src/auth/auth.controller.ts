import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import AuthDto from './dto/auth.dto';
import TokenModel from './token.model';

@ApiTags('Auth')
@Controller({ version: '1', path: 'auth' })
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post()
  // @Throttle(20, 300) // 20 requests max every 5 minutes for the same IP
  async login(@Body() authDto: AuthDto, @Res() res: Response) {
    const response = await this.authService.login(authDto);
    if (response instanceof TokenModel) {
      res.cookie('refreshToken', response.getRefreshToken(), {
        expires: new Date(
          new Date().getTime() +
            parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRE) * 60 * 60 * 1000,
        ),
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
      });
      return res.send({ token: response.getToken() });
    }
    throw new HttpException(response, HttpStatus.UNAUTHORIZED);
  }

  @SkipThrottle()
  @Post('/refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    if (req.headers.cookie) {
      const response = await this.authService.refresh(req.headers.cookie);
      if (response instanceof TokenModel) {
        res.cookie('refreshToken', response.getRefreshToken(), {
          expires: new Date(
            new Date().getTime() +
              parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRE) * 60 * 60 * 1000,
          ),
          sameSite: 'strict',
          httpOnly: true,
        });
        return res.status(200).send({ token: response.getToken() });
      } else {
        throw new HttpException(response, response.statusCode);
      }
    }
  }

  @SkipThrottle()
  @Get('/logout')
  logout(@Res() res: Response): Response {
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
    return res.send({ message: 'Logout successfully' });
  }
}
