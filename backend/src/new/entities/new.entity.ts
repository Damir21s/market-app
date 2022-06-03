import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('new')
export class NewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  device_id: number;

  @Column()
  image: string;

  @Column()
  name: string;
}
