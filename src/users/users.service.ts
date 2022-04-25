import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.createUser(createUserDto);

    return { data: newUser, status: 201 };
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOneByEmail(email);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
