import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class ProductsSeeder {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async insert(): Promise<void> {
    const existingProduct = await this.entityManager.query(
      `SELECT name FROM product WHERE name = 'test product'`,
    );

    if (existingProduct.length > 0) {
      console.log(
        'Test product in table "product" already exists, skipping insertion',
      );
      return;
    }

    await this.entityManager.query(
      `INSERT INTO product (id, name, price, description, stock) VALUES (1, 'test product', 1000, 'test description', 1)`,
    );
  }
}
