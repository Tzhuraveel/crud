import { Module } from '@nestjs/common';
import { MongoService } from './services/mongo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MongoService,
    }),
  ],
})
export class MongoModule {}
