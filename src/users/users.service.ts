import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.createUser(createUserDto);

    return newUser;
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOneByEmail(email);
    return user;
  }

  async update(id: ObjectID, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userRepository.updatePartialUser(id, updateUserDto);
    return updatedUser;
  }

  async remove(id: string) {
    const deleted = await this.userRepository.findOne(id);
    this.userRepository.remove(deleted);
    return `This action removes a #${id} user`;
  }
}
