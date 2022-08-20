import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './user.types';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickName: string;

  @Column()
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.STUDENT,
  })
  role: Role;

  @Column()
  age: number;

  @Column({ default: 30000 })
  point: number;

  //   // Photo
  //   @OneToOne((type) => Photo, (photo) => photo.user)
  //   photo: Photo;

  //   // Likes
  //   @OneToMany((type) => Lecture, (lecture) => lecture.liked)
  //   likes: Lecture;
  //   // Register
  //   @OneToMany((type) => Lecture, (lecture) => lecture.student)
  //   register: Lecture[];

  //   // Establish
  //   @OneToMany((type) => Lecture, (lecture) => lecture.instructor)
  //   establish: Lecture[];
}
