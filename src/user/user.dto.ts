import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
  photoUrl: string;
}

export class UpdateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  nickName: string;
}

export class UpdateUserParams {
  id: number;
  nickName: string;
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
