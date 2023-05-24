import { IsDateString, IsNotEmpty, IsString } from "class-validator";
import BaseModel from "./BaseModel";
import {
  ConfirmPasswordMessage,
  IsNotEmptyMessage,
  IsStringMessage,
} from "./ErrorMessages";
import { Match } from "./decorators/match.decorator";

export class SignUpFirstStepDto extends BaseModel {
  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  lastname!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  firstname!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  email!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  password!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @Match(SignUpFirstStepDto, (s) => s.password, {
    message: ConfirmPasswordMessage,
  })
  @IsString({ message: IsStringMessage })
  confirmPassword!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsDateString()
  birth_date!: string;
}
