import { Injectable, OnModuleInit } from '@nestjs/common';
import { RoleSeeder } from './roles.seeder';
import { ProductsSeeder } from './products.seeder';

@Injectable()
export class AppSeeder implements OnModuleInit {
  constructor(
    private roleSeeder: RoleSeeder,
    private productsSeeder: ProductsSeeder,
  ) {}

  async onModuleInit() {
    await this.roleSeeder.insert();
    await this.productsSeeder.insert();
  }
}
