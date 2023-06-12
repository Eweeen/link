import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreatePortfolioDto {
  @ApiProperty({ name: 'title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ name: 'description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ name: 'type' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ name: 'path' })
  @IsNotEmpty()
  @IsString()
  path: string;

  @ApiProperty({ name: 'user_id' })
  @IsNotEmpty()
  @IsNumberString()
  user_id: number;
}
