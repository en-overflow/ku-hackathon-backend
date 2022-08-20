import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from 'src/photo/photo.service';
import { User } from 'src/user/user.entity';
import { LectureController } from './lecture.controller';
import { Lecture } from './lecture.entity';
import { LectureService } from './lecture.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lecture, User])],
  controllers: [LectureController],
  providers: [LectureService, PhotoService],
})
export class LectureModule {}
