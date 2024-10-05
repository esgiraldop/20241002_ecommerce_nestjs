import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTransactionsService } from './user-transactions.service';
import { CreateUserTransactionDto } from './dto/create-user-transaction.dto';
import { UpdateUserTransactionDto } from './dto/update-user-transaction.dto';

@Controller('user-transactions')
export class UserTransactionsController {
  constructor(private readonly userTransactionsService: UserTransactionsService) {}

  @Post()
  create(@Body() createUserTransactionDto: CreateUserTransactionDto) {
    return this.userTransactionsService.create(createUserTransactionDto);
  }

  @Get()
  findAll() {
    return this.userTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTransactionDto: UpdateUserTransactionDto) {
    return this.userTransactionsService.update(+id, updateUserTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTransactionsService.remove(+id);
  }
}
