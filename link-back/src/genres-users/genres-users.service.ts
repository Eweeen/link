import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GenreUser } from './entities/genre-user.entity';
import { CreateGenreUserDto } from './dto/create-genre-user.dto';

@Injectable()
export class GenresUsersService {
  constructor(private dataSource: DataSource) {}

  genresUsersRepository() {
    return this.dataSource.getRepository(GenreUser);
  }

  async create(createGenreUserRequest: CreateGenreUserDto): Promise<GenreUser> {
    return await this.genresUsersRepository().save({
      user: { id: createGenreUserRequest.user_id },
      genre: { id: createGenreUserRequest.genre_id },
    });
  }
}
