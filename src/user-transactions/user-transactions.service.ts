import { Injectable } from '@nestjs/common';
import { CreateUserTransactionDto } from './dto/create-user-transaction.dto';
import { UpdateUserTransactionDto } from './dto/update-user-transaction.dto';

@Injectable()
export class UserTransactionsService {
  create(createUserTransactionDto: CreateUserTransactionDto) {
    return 'This action adds a new userTransaction';
  }

  findAll() {
    return `This action returns all userTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTransaction`;
  }

  update(id: number, updateUserTransactionDto: UpdateUserTransactionDto) {
    return `This action updates a #${id} userTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTransaction`;
  }
}
