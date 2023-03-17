import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  @HttpCode(201)
  async signUp(@Body() signUpRequest: SignUpDto): Promise<User> {
    const isEmailUsed = await this.usersService.findOneByEmail(
      signUpRequest.email,
    );

    if (isEmailUsed)
      throw new HttpException(
        `Un utilisateur avec le même e-mail existe déjà`,
        HttpStatus.CONFLICT,
      );

    return await this.usersService.signUp(signUpRequest);
  }

  @Get()
  @Auth('admin')
  async findAll(@Query('page') page: number) {
    return this.usersService.findAll(page);
  }

  @Get(':id')
  @Auth('user', 'moderator', 'admin')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }
}
