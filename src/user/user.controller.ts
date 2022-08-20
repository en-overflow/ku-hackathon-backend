import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateRoleDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() params: CreateUserDto) {
    return this.userService.createUser(params);
  }

  @Get(':id')
  async fetchUser(@Param('id') id: number) {
    return this.userService.fetchUser(id);
  }

  @Get()
  async fetchUsers() {
    return this.userService.fetchUsers();
  }

  @Put()
  async updateUser(@Body() params: UpdateUserDto) {
    return this.userService.updateUser(params);
  }

  @Put('/role')
  async updateRole(@Body() params: UpdateRoleDto) {
    return this.userService.updateRole(params);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Get('/likes/:id')
  async fetchLikeLectures(@Param('id') id: number) {
    return this.userService.fetchLikeLectures(id);
  }

  @Get('/register/:id')
  async fetchRegisterLectures(@Param('id') id: number) {
    return this.userService.fetchRegisterLectures(id);
  }

  @Get('/open/:id')
  async fetchOpenLectures(@Param('id') id: number) {
    return this.userService.fetchLikeLectures(id);
  }
}
