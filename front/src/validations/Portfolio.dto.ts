import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import BaseModel from "./BaseModel";
import { IsNotEmptyMessage, IsStringMessage } from "./ErrorMessages";

export class PortfolioDto extends BaseModel {
  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  title!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  description!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  type!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsString({ message: IsStringMessage })
  path!: string;

  @IsNotEmpty({ message: IsNotEmptyMessage })
  @IsNumber()
  user_id!: number;
}
