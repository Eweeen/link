import { IsNotEmpty, IsString } from "class-validator";
import BaseModel from "./BaseModel";
import { IsNotEmptyMessage, IsStringMessage } from "./ErrorMessages";

export class LoginDto extends BaseModel {
  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  username!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  password!: string;
}
