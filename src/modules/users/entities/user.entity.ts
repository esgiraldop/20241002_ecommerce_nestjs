import { Role } from 'src/modules/roles/roles.entity';
import { UserTransactions } from 'src/user-transactions/entities/user-transaction.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToMany(() => UserTransactions, (userTransaction) => userTransaction.user)
  userTransactions: UserTransactions[];
}
