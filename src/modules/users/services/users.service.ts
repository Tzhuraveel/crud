import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { UsersRepository } from '../../repository/services/users.repository';
import { UserEntity } from '../../../database/entities';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserInput: CreateUserInput): Promise<UserEntity> {
    return this.usersRepository.save({
      firstName: createUserInput.firstName,
      lastName: createUserInput.secondName,
      password: createUserInput.password,
    });
  }

  getAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  getOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
