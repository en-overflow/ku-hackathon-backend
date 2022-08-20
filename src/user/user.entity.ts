import { Lecture } from 'src/lecture/lecture.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
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

  @Column()
  photoUrl: string;

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

  @ManyToMany((type) => Lecture, (lecture) => lecture.liked)
  likeLectures: Lecture[];

  @ManyToOne((type) => Lecture, (lecture) => lecture.students)
  registerLectures: Lecture[];

  // Establish
  @OneToMany((type) => Lecture, (lecture) => lecture.instructor)
  openLectures: Lecture[];
}
