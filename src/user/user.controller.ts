import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PhotoService } from 'src/photo/photo.service';
import { CreateUserDto, CreateUserParams, UpdateRoleDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService,
    private photoService: PhotoService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async createUser(@UploadedFiles() files, @Body() params: CreateUserDto) {
    const locations = await this.photoService.upload(files);
    const userParams: CreateUserParams = {
      age: params.age,
      name: params.name,
      nickName: params.nickName,
      phoneNumber: params.nickName,
      photoUrl: locations[0],
    };
    return this.userService.createUser(userParams);
  }

  @Get(':id')
  async fetchUser(@Param('id') id: number) {
    return this.userService.fetchUser(id);
  }

  @Get()
  async fetchUsers() {
    return this.userService.fetchUsers();
  }

  @Get('/register/:id')
  async fetchRegisterLectures(@Param('id') id: number) {
    return this.userService.fetchRegisterLectures(id);
  }
  @Get('/likes/:id')
  async fetchLikeLectures(@Param('id') id: number) {
    return this.userService.fetchLikeLectures(id);
  }
  @Get('/open/:id')
  async fetchOpenLectures(@Param('id') id: number) {
    return this.userService.fetchOpenLectures(id);
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
}
