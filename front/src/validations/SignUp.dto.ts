import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";
import BaseModel from "./BaseModel";
import {
  ConfirmPasswordMessage,
  IsNotEmptyMessage,
  IsStringMessage,
} from "./ErrorMessages";
import { Match } from "./decorators/match.decorator";

export class SignUpDto extends BaseModel {
  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  lastname!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  firstname!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  username!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  email!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  password!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @Match(SignUpDto, (s) => s.password, {
    message: ConfirmPasswordMessage,
  })
  @IsString({ message: IsStringMessage })
  confirmPassword!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsDateString()
  birth_date!: string;

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
