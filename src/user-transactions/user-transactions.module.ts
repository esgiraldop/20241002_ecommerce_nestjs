import { Module } from '@nestjs/common';
import { UserTransactionsService } from './user-transactions.service';
import { UserTransactionsController } from './user-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTransactions } from './entities/user-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTransactions])],
  controllers: [UserTransactionsController],
  providers: [UserTransactionsService],
})
export class UserTransactionsModule {}
