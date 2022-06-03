import { CharacteristicsEntity } from 'src/characteristics/entities/characteristic.entity';
import { TypeEntity } from 'src/type/entities/type.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('devices')
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => TypeEntity, (type) => type.type)
  @JoinColumn({ name: 'typeId' })
  typeId: TypeEntity;

  @OneToOne(() => CharacteristicsEntity)
  @JoinColumn({ name: 'characteristics' })
  characteristics: CharacteristicsEntity;
}
