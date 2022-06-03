import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types')
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
