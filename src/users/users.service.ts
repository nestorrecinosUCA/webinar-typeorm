import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.createUser(createUserDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userRepository.findOneByEmail(email);
    return user;
  }

  async update(id: ObjectID, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userRepository.updatePartialUser(
      id,
      updateUserDto,
    );
    return updatedUser;
  }

  async remove(id: string): Promise<string> {
    const deleted = await this.userRepository.findOne(id);
    this.userRepository.remove(deleted);
    return `User deleted`;
  }
}
