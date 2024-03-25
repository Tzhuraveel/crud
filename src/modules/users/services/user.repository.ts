import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../model/User.model';
import { Model } from 'mongoose';
import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userModel.create({
      firstName: createUserInput.firstName,
      lastName: createUserInput.lastName,
      password: createUserInput.password,
    });
  }

  async getOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
