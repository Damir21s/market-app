import { TypeEntity } from 'src/type/entities/type.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('devices')
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column({ nullable: true, type: 'json' })
  description: Array<string>;

  @Column()
  price: number;

  @ManyToOne(() => TypeEntity, (type) => type.type)
  @JoinColumn({ name: 'typeId' })
  typeId: TypeEntity;

  // @OneToOne(() => CharacteristicsEntity)
  // @JoinColumn({ name: 'characteristics' })
  // characteristics: CharacteristicsEntity;

  @Column({ nullable: true, type: 'json' })
  characteristics: Array<Object>;
}
