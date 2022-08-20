import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from './user.types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nickName: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}

export interface CreateUserParams {
  name: string;
  nickName: string;
  phoneNumber: string;
  age: number;
}

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNumber()
  @IsOptional()
  point: number;
}

export class UpdateUserParams {
  id?: number;
  point?: number;
}

export class UpdateRoleDto {
  @IsNumber()
  id: number;

  @IsEnum(Role)
  role: Role;
}

export interface UpdateRoleParams {
  id: number;
  role: Role;
}
