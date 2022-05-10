import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
@Entity()
export class User {
  @ObjectIdColumn()
  @ApiHideProperty()
  id: ObjectID;

  @Column({ nullable: false })
  @ApiProperty()
  name: string;

  @Column({ unique: true, nullable: false })
  @ApiProperty()
  email: string;

  @Column({ nullable: false })
  @ApiProperty({ default: 1 })
  age: number;

  @Column({ nullable: true })
  @ApiProperty()
  phone: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}
