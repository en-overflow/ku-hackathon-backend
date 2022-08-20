import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category, Level, Status } from './lecture.types';

@Entity()
export class Lecture extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'timestamp',
  })
  dueDate: Date;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column({ type: 'enum', enum: Level, default: Level.BASIC })
  level: Level;

  @Column({ type: 'enum', enum: Category, default: Category.ETC })
  category: Category;

  @Column({ type: 'enum', enum: Status, default: Status.PENDING })
  status: Status;

  //   @OneToMany((type) => User, (user) => user.registerLectures)
  //   student: User[];
}
