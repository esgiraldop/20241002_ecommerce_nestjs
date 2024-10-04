import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RolesEnum } from './enums/roles.enum';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: RolesEnum })
  name: string;
}
