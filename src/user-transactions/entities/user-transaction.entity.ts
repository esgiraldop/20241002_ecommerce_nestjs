import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user_transactions')
export class UserTransactions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userTransactions)
  user: User;

  @Column({ name: 'total_price' })
  totalPrice: number;

  @ManyToMany(() => Product, (product) => product.userTransactions, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];
}
