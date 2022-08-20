import { Category } from './lecture.types';

export class CreateLectureDto {
  title: string;
  description: string;
  dueDate: Date;
  pictures: string[];
}

export interface CreateLectureParams {
  title: string;
  description: string;
  dueDate: Date;
  pictures: string[];
}

export class RegisterLectureDto {
  id: number;
}

export class RegisterLectureParams {
  id: number;
}

export class LikeLectureDto {
  id: number;
}

export class LikeLectureParams {
  id: number;
}

export class CancelRegisterLectureDto {
  id: number;
}

export interface CancelRegisterLectureParams {
  id: number;
}
export class CancelLikeLectureDto {
  id: number;
}

export interface CancelLikeLectureParams {
  id: number;
}

export class SearchLectureDto {
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
