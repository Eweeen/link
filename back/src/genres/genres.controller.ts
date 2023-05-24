import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';

@ApiTags('Genres')
@Controller({ version: '1', path: 'genres' })
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post('create')
  @HttpCode(201)
  async signUp(@Body() req: CreateGenreDto) {
    return await this.genresService.create({ name: req.name });
  }

  @Get()
  async findAll(): Promise<Genre[]> {
    return await this.genresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return await this.genresService.findOne(id);
  }
}
