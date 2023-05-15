import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGenreUserDto {
  @ApiProperty({ name: 'genre_id' })
  @IsNotEmpty()
  @IsNumber()
  genre_id: number;

  @ApiProperty({ name: 'user_id' })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
