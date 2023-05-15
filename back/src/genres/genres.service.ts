import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenresService {
  constructor(private dataSource: DataSource) {}

  genresRepository() {
    return this.dataSource.getRepository(Genre);
  }

  async create(createGenreRequest: CreateGenreDto): Promise<Genre> {
    return await this.genresRepository().save({
      name: createGenreRequest.name,
    });
  }

  async findOne(id: number): Promise<Genre> {
    return await this.genresRepository().findOne({
      where: { id },
    });
  }
}
