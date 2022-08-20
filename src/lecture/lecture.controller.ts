import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PhotoService } from 'src/photo/photo.service';

import { CreateUserDto } from 'src/user/user.dto';
import {
  CancelLikeLectureDto,
  CancelRegisterLectureDto,
  CreateLectureDto,
  CreateLectureParams,
  FilterLectureDto,
  InspectLectureDto,
  LikeLectureDto,
  RegisterLectureDto,
  SearchLectureDto,
  UpdateLectureStatusDto,
} from './lecture.dto';
import { LectureService } from './lecture.service';

@Controller('/api/lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService,
    private readonly photoService: PhotoService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  async createLecture(@UploadedFiles() files, @Body() params: CreateLectureDto) {
    const photoUrls = await this.photoService.upload(files);

    const lectureParams: CreateLectureParams = {
      instructorId: params.instructorId,
      title: params.title,
      description: params.description,
      dueDate: params.dueDate,
      photoUrl: photoUrls[0],
      price: params.price,
      location: params.location,
      level: params.level,
      category: params.category
    };
    return this.lectureService.createLecture(lectureParams);
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

  @Delete('/register')
  async cancelRegisterLecture(@Body() params: CancelRegisterLectureDto) {
    return this.lectureService.cancelRegisterLecture(params);
  }

  @Post('/likes')
  async likeLecture(@Body() params: LikeLectureDto) {
    return this.lectureService.likeLecture(params);
  }

  @Delete('/likes')
  async cancelLikeLecture(@Body() params: CancelLikeLectureDto) {
    return this.lectureService.cancelLikeLecture(params);
  }

  @Post('/status')
  async updateStatusLecture(@Body() params: UpdateLectureStatusDto) {
    return this.lectureService.updateStatusLecture(params);
  }
}
