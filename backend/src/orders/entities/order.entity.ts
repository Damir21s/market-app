import { DeviceEntity } from 'src/device/entities/device.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';

//здесь создаются колонки колонки в бд
@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  userId: UserEntity;

  @Column({ type: 'jsonb' })
  devicesId: number[];
}
