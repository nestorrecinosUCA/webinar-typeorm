import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity';
import { Db } from 'typeorm';


@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mongodb',
    host: process.env.DB_HOSTS,
    port: Number(process.env.DB_PORT),
    username: 'username',
    password: '',
    database: process.env.DB_DATABASE,
    useUnifiedTopology: true,
    entities: [User],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
