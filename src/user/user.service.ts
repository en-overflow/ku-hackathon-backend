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
    return this.userRepository.find();
  }

  async fetchUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async updateUser(params: UpdateUserParams) {
    const { id, nickName } = params;
    return this.userRepository.update(id, { nickName });
  }

  async updateRole(params: UpdateRoleParams) {
    const { id, role } = params;
    return this.userRepository.update(id, { role });
  }

  async deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
