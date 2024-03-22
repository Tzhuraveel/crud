import { Injectable } from '@nestjs/common';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { UserEntity } from '../../../database/entities';

@Injectable()
export class MongoService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      url: 'url',
      useNewUrlParser: true,
      logging: true,
      synchronize: true,
      entities: [UserEntity],
    };
  }
}
