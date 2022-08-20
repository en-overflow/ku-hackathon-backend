import { Test, TestingModule } from '@nestjs/testing';
import { LectureController } from './lecture.controller';

describe('LectureController', () => {
  let controller: LectureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectureController],
    }).compile();

    controller = module.get<LectureController>(LectureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createLecture', () => {
    it('should call create user', async () => {
      const params = {
        name: 'testName',
        nickName: 'testNickName',
        phoneNumber: 'testPhoneNumber',
        age: 60,
      };

      await controller.createUser(params);
      expect(serviceMock.createUser).toBeCalledWith(params);
    });
  });

  describe('fetchUser', () => {
    it('should call fetch user', async () => {
      const params = 1;
      await controller.fetchUser(params);
      expect(serviceMock.fetchUser).toBeCalledWith(params);
    });
  });

  describe('fetchUsers', () => {
    it('should call fetch users', async () => {
      await controller.fetchUsers();
      expect(serviceMock.fetchUsers).toBeCalled();
    });
  });

  describe('updateUser', () => {
    it('should call update user', async () => {
      const params = {
        id: 1,
        nickName: 'testNickName',
      };

      await controller.updateUser(params);
      expect(serviceMock.updateUser).toBeCalledWith(params);
    });
  });

  describe('deleteUser', () => {
    it('should call delete user', async () => {
      const params = 1;

      await controller.deleteUser(params);
      expect(serviceMock.deleteUser).toBeCalledWith(params);
    });
  });
});
