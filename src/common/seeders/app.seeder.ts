import { Injectable, OnModuleInit } from '@nestjs/common';
import { RoleSeeder } from './role.seeder';

@Injectable()
export class AppSeeder implements OnModuleInit {
  constructor(private roleSeeder: RoleSeeder) {}

  async onModuleInit() {
    await this.roleSeeder.insert();
  }
}
