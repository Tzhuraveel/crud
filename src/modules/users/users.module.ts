import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './services/users.service';
import { UsersRepository } from './services/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/User.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
