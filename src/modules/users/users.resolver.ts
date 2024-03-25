import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './services/users.service';
import { ParseObjectIdPipe } from '../../common/pipes';
import { User } from './model/User.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Query(() => User, { name: 'user' })
  getById(@Args('id', ParseObjectIdPipe) id: string) {
    return this.usersService.getOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', ParseObjectIdPipe) id: string) {
    return this.usersService.remove(id);
  }
}
