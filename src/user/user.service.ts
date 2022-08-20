import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserParams,
  UpdateRoleParams,
  UpdateUserParams,
} from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(params: CreateUserParams) {
    return this.userRepository.insert(params);
  }

  async fetchUsers() {
    return this.userRepository.find({
      relations: ['likeLectures', 'registerLectures', 'openLectures'],
    });
  }

  async fetchUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async fetchRegisterLectures(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['registerLectures'],
    });

    return user.registerLectures;
  }
  async fetchLikeLectures(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['likeLectures'],
    });
    return user.likeLectures;
  }
  async fetchOpenLectures(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['openLectures'],
    });
    console.log(user);
    return user.openLectures;
  }

  async updateUser(params: UpdateUserParams) {
    const { id, point } = params;
    const user = await this.userRepository.findOne({ where: { id } });
    user.point = point;
    return this.userRepository.save(user);
  }

  async updateRole(params: UpdateRoleParams) {
    const { id, role } = params;
    return this.userRepository.update(id, { role });
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
