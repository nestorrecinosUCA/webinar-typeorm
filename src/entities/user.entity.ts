import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false})
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false})
  age: number;

  @Column({ nullable: true })
  phone: string;
  @CreateDateColumn()
  createdAt: Date;
}
