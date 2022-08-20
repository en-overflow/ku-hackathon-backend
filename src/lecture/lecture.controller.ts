import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { CreateUserDto } from 'src/user/user.dto';
import {
  CancelLikeLectureDto,
  CancelRegisterLectureDto,
  FilterLectureDto,
  InspectLectureDto,
  LikeLectureDto,
  RegisterLectureDto,
  SearchLectureDto,
} from './lecture.dto';
import { LectureService } from './lecture.service';

@Controller('/api/lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  async createLecture(@Body() params: CreateUserDto) {
    return this.lectureService.createLecture(params);
  }

  @Get()
  async fetchLectures() {
    return this.lectureService.fetchLectures();
  }

  @Get('/filter')
  async fetchLecturesByFilter(@Query() params: FilterLectureDto) {
    return this.lectureService.fetchLecturesByFilter(params);
  }

  @Get('/search')
  async fetchLecturesBySearch(@Query() params: SearchLectureDto) {
    return this.lectureService.fetchLecturesBySearch(params);
  }

  @Get('/details/:id')
  async inspectLecture(@Param('id') params: InspectLectureDto) {
    return this.lectureService.inspectLecture(params);
  }

  @Post('/register')
  async registerLecture(@Body() params: RegisterLectureDto) {
    return this.lectureService.registerLecture(params);
  }

  @Put('/register/:id')
  async cancelRegisterLecture(@Param() params: CancelRegisterLectureDto) {
    return this.lectureService.cancelRegisterLecture(params);
  }

  @Post('/likes')
  async likeLecture(@Body() params: LikeLectureDto) {
    return this.lectureService.likeLecture(params);
  }

  @Put('/likes/:id')
  async cancelLikeLecture(@Param() params: CancelLikeLectureDto) {
    return this.lectureService.cancelLikeLecture(params);
  }
}
