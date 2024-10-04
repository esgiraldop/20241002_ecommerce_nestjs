import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { RolesModule } from './modules/roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './common/config/database.config';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './common/config/env.config';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    TransactionsModule,
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [EnvConfig],
    }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfigService }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
