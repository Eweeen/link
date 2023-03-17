import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ name: 'lastname' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ name: 'firstname' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ name: 'username' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ name: 'description' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ name: 'email' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ name: 'image' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ name: 'birth_date' })
  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty({ name: 'city' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ name: 'zip' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  zip: string;
}
