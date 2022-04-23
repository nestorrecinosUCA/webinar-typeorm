import { Column, CreateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm';
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
