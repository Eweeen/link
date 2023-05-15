import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInspirationDto {
  @ApiProperty({ name: 'name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ name: 'user_id' })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
