import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({ name: 'name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ name: 'user_id' })
  @IsNotEmpty()
  @IsNumberString()
  user_id: number;
}
