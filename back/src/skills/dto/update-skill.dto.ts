import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateSkillDto {
  @ApiProperty({ name: 'name' })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;
}
