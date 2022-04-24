import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
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
