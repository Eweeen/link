import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class SignUpDto {
  @ApiProperty({ name: 'lastname' })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ name: 'firstname' })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ name: 'username' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ name: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ name: 'password' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ name: 'birth_date' })
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty({ name: 'city' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ name: 'color' })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({ name: 'profession_id' })
  @IsNotEmpty()
  @IsNumber()
  profession_id: number;
}
