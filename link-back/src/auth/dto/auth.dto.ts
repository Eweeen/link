import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class AuthDto {
  @ApiProperty({ example: 'exemple' })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'mdp' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
