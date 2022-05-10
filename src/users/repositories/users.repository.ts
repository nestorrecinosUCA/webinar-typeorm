import { User } from 'src/entities/user.entity';
import { EntityRepository, MongoRepository, ObjectID } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@EntityRepository(User)
export class UsersRepository extends MongoRepository<User> {
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.create(createUserDto);
    const userSaved = await this.save(newUser);
    return userSaved;
  }
  public async updatePartialUser(
    id: ObjectID,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.findOne(id);
    const updatedUser = await this.save({ ...user, ...updateUserDto });
    return updatedUser;
  }
  public async findOneByEmail(email: string): Promise<User> {
    const user = await this.findOne({
      where: { email },
    });
    return user;
  }
}
