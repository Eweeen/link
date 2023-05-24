import {
  IsArray,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";
import BaseModel from "./BaseModel";
import { IsNotEmptyMessage, IsStringMessage } from "./ErrorMessages";

export class SignUpSecondStepDto extends BaseModel {
  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  username!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  city!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsNumberString()
  profession_id!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsNumberString()
  genre_id!: string;

  @IsOptional()
  @IsArray()
  inspirations!: string[];
}
