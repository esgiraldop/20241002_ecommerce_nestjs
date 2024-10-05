import { UserTransactions } from 'src/user-transactions/entities/user-transaction.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  name: string;

  @Column({ type: 'decimal', nullable: false })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'integer', nullable: false })
  stock: number;

  @ManyToMany(
    () => UserTransactions,
    (userTransaction) => userTransaction.products,
  )
  userTransactions: UserTransactions[];
}
