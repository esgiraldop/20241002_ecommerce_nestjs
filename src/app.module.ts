import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './common/config/database.config';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './common/config/env.config';
import { UserTransactionsModule } from './user-transactions/user-transactions.module';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [EnvConfig],
    }),
    TypeOrmModule.forRootAsync({ useClass: DatabaseConfigService }),
    UserTransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
