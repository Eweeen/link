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
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { PaginatedUsers, SignUp } from './users.interface';
import { SignUpDto } from './dto/sign-up.dto';
import { GenresService } from 'src/genres/genres.service';
import { GenresUsersService } from 'src/genres-users/genres-users.service';
import { InspirationsService } from 'src/inspirations/inspirations.service';
import { CreateInspirationDto } from 'src/inspirations/dto/create-inspiration.dto';
import { AccessToken } from 'src/common/cookies.decorator';
import jwt from 'jsonwebtoken';

@ApiTags('Users')
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly genresService: GenresService,
    private readonly genresUsersService: GenresUsersService,
    private readonly inspirationsService: InspirationsService,
  ) {}

  @Post('sign-up')
  @HttpCode(201)
  async signUp(@Body() signUpRequest: SignUp) {
    const isEmailUsed = await this.usersService.findOneByEmail(
      signUpRequest.email,
    );

    if (isEmailUsed) {
      throw new HttpException(
        `Un utilisateur avec le même e-mail existe déjà.`,
        HttpStatus.CONFLICT,
      );
    }

    const genre = await this.genresService.findOne(signUpRequest.genre_id);

    if (!genre) {
      throw new HttpException(`Le genre n'existe pas.`, HttpStatus.NOT_FOUND);
    }

    // Build DTO
    const signUpDto = new SignUpDto();
    signUpDto.lastname = signUpRequest.lastname;
    signUpDto.firstname = signUpRequest.firstname;
    signUpDto.username = signUpRequest.username;
    signUpDto.email = signUpRequest.email;
    signUpDto.password = signUpRequest.password;
    signUpDto.birth_date = new Date(signUpRequest.birth_date);
    signUpDto.city = signUpRequest.city;
    signUpDto.profession_id = signUpRequest.profession_id;

    const user = await this.usersService.signUp(signUpDto);

    await this.genresUsersService.create({
      genre_id: genre.id,
      user_id: user.id,
    });

    const createInspirations = [];

    for (const inspiration of signUpRequest.inspirations) {
      const inspirationsDto = new CreateInspirationDto();
      inspirationsDto.name = inspiration;
      inspirationsDto.user_id = user.id;
      createInspirations.push(this.inspirationsService.create(inspirationsDto));
    }

    await Promise.all(createInspirations);

    return user;
  }

  @Get()
  @Auth('admin')
  async findAll(@Query('page') page: number) {
    return this.usersService.findAll(page);
  }

  @Get('/search')
  async findAllExceptAdmin(
    @Query('profession') profession: string,
    @Query('city') city: string,
    @Query('page') page?: number,
    @AccessToken() accessToken?: string,
  ): Promise<PaginatedUsers> {
    const decodedToken = jwt.decode(accessToken);
    const userId = decodedToken ? decodedToken['id'] : undefined;
    profession = profession !== 'undefined' ? profession : undefined;
    city = city !== 'undefined' ? city : undefined;

    return this.usersService.findAllExceptAdmin(profession, city, userId, page);
  }

  @Get(':id')
  @Auth('user', 'moderator', 'admin')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Get('find/:username')
  async findOneByUsername(@Param('username') username: string): Promise<User> {
    return await this.usersService.findOneByUsername(username);
  }
}
