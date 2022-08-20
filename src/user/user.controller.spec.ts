import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const serviceMock = {
  createUser: jest.fn(),
  fetchUser: jest.fn(),
  fetchUsers: jest.fn(),
  deleteUser: jest.fn(),
  updateUser: jest.fn(),
  updateRole: jest.fn(),
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
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
