import { EntityRepository, MongoRepository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {
  public async createUser(createUserDto: CreateUserDto): Promise<User>{
    const newUser = this.create(createUserDto);
    const userSaved = await this.save(newUser);
    return userSaved;
  }
}