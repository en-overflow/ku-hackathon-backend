import { Category, Level, Status } from './lecture.types';

export class CreateLectureDto {
  instructorId: number;
  title: string;
  description: string;
  dueDate: Date;
  //   pictures: string[];
  price: number;
  location: string;
  level: Level;
  category: Category;
}

export interface CreateLectureParams {
  instructorId: number;
  title: string;
  description: string;
  dueDate: Date;
  photoUrl: string
  price: number;
  location: string;
  level: Level;
  category: Category;
}

export class RegisterLectureDto {
  lectureId: number;
  studentId: number;
}

export class RegisterLectureParams {
  lectureId: number;
  studentId: number;
}

export class CancelRegisterLectureDto {
  lectureId: number;
  studentId: number;
}

export interface CancelRegisterLectureParams {
  lectureId: number;
  studentId: number;
}
export class LikeLectureDto {
  lectureId: number;
  studentId: number;
}

export class LikeLectureParams {
  lectureId: number;
  studentId: number;
}
export class CancelLikeLectureDto {
  lectureId: number;
  studentId: number;
}

export interface CancelLikeLectureParams {
  lectureId: number;
  studentId: number;
}

export class SearchLectureDto {
  name: string;
}
export class SearchLectureParams {
  name: string;
}

export class FilterLectureDto {
  category?: Category;
  location?: string;
}
export interface FilterLectureParams {
  category?: Category;
  location?: string;
}

export class InspectLectureDto {
  id: number;
}

export interface InspectLectureParams {
  id: number;
}

export class UpdateLectureStatusDto {
  id: number;
  status?: Status;
}

export interface UpdateLectureStatusParams {
  id: number;
  status?: Status;
}
