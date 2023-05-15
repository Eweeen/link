import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { readFileSync } from 'fs';
import { decode, sign } from 'jsonwebtoken';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import AuthDto from './dto/auth.dto';
import TokenModel from './token.model';

@Injectable()
export class AuthService {
  public constructor(private readonly userService: UsersService) {}

  public async login(authDto: AuthDto) {
    const user = await this.userService.findOneAuthentification(
      authDto.username,
    );

    if (!user) return { message: 'Identifiants incorrect' };

    if (compareSync(authDto.password, user.password)) {
      return this.generateTokens(user);
    }
  }

  public async refresh(
    cookies: string,
  ): Promise<TokenModel | { statusCode: number; message: string }> {
    try {
      const cookiesArray = cookies.split('; ');

      // If accessToken exist
      const matchCookie = cookiesArray.find((cookie) => {
        if (cookie.includes('refreshToken=')) {
          return true;
        }
      });
      const refreshToken = matchCookie.replace('refreshToken=', '').trim();

      const token: any = decode(refreshToken);
      const user: User = await this.userService.findOneAuthentification(
        token.email,
      );

      /* TODO */
      /* Fix error id is undefined */
      console.log(token);
      console.log(user);
      /* ========================= */

      return this.generateTokens(user);
    } catch (e) {
      console.log(e);
      return {
        statusCode: 404,
        message: 'RefreshToken introuvable !',
      };
    }
  }

  private generateTokens(user: User): TokenModel {
    const privateKey = readFileSync('./jwt/id_rsa', 'utf8');

    const userToken = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      description: user.description,
      email: user.email,
      image: user.image,
      birth_date: user.birth_date,
      city: user.city,
      role: user.role.label,
    };

    return new TokenModel(
      sign(userToken, privateKey, {
        algorithm: 'RS256',
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE + 's',
      }),
      sign(userToken, privateKey, {
        algorithm: 'RS256',
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE + 'h',
      }),
    );
  }
}
