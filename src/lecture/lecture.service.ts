import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import {
  CancelLikeLectureDto,
  CancelLikeLectureParams,
  CancelRegisterLectureParams,
  CreateLectureParams,
  FilterLectureParams,
  InspectLectureParams,
  LikeLectureParams,
  RegisterLectureParams,
  SearchLectureDto,
  SearchLectureParams,
  UpdateLectureStatusParams,
} from './lecture.dto';
import { Lecture } from './lecture.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createLecture(params: CreateLectureParams) {
    const { instructorId, ...lectureParams } = params;

    const instructor = await this.userRepository.findOne({
      where: { id: instructorId },
    });

    const lecture = this.lectureRepository.create(lectureParams);
    lecture.instructor = instructor;
    return this.lectureRepository.insert(params);
  }

  async fetchLectures() {
    return this.lectureRepository.find();
  }

  async fetchLecturesByFilter(params: FilterLectureParams) {
    return this.lectureRepository.find({ where: params });
  }

  async fetchLecturesBySearch(params: SearchLectureParams) {
    const lectures = await this.lectureRepository.find();
    const searchedLectures = lectures.filter((lecture) => {
      lecture.title.indexOf(params.name) != -1;
    });

    return searchedLectures;
  }

  async inspectLecture(params: InspectLectureParams) {
    return this.lectureRepository.findOne({ where: params });
  }

  async registerLecture(params: RegisterLectureParams) {
    const { lectureId, studentId } = params;
    const newStudent = await this.userRepository.findOne({
      where: { id: studentId },
    });
    const lecture = await this.lectureRepository.findOne({
      where: { id: lectureId },
    });

    lecture.students = [...lecture.students, newStudent];

    return this.lectureRepository.save(lecture);
  }

  async cancelRegisterLecture(params: CancelRegisterLectureParams) {
    const { lectureId, studentId } = params;
    const lecture = await this.lectureRepository.findOne({
      where: { id: lectureId },
    });

    lecture.students = lecture.students.filter(
      (student) => student.id != studentId,
    );

    return this.lectureRepository.save(lecture);
  }

  async likeLecture(params: LikeLectureParams) {
    const { lectureId, studentId } = params;
    const student = await this.userRepository.findOne({
      where: { id: studentId },
    });
    const lecture = await this.lectureRepository.findOne({
      where: { id: lectureId },
    });

    lecture.liked = [...lecture.students, student];

    return this.lectureRepository.save(lecture);
  }

  async cancelLikeLecture(params: CancelLikeLectureParams) {
    const { lectureId, studentId } = params;

    const lecture = await this.lectureRepository.findOne({
      where: { id: lectureId },
    });

    lecture.liked = lecture.liked.filter((student) => student.id != studentId);

    return this.lectureRepository.save(lecture);
  }

  async updateStatusLecture(params: UpdateLectureStatusParams) {
    return this.lectureRepository.update(params.id, { status: params.status });
  }
}
