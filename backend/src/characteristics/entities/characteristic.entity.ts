import { TypeEntity } from 'src/type/entities/type.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('characteristics')
export class CharacteristicsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  screen: string;

  @Column({ nullable: true })
  internal_memory: string;

  @Column({ nullable: true })
  RAM: string;

  @Column({ nullable: true })
  сamera: string;

  @Column({ nullable: true })
  battery: string;

  @Column({ nullable: true })
  CPU: string;

  @Column({ nullable: true })
  SIM_cards: string;

  @Column({ nullable: true })
  operating_system: string;

  @Column({ nullable: true })
  communication_standard: string;

  @Column({ nullable: true })
  weight: string;

  @Column({ nullable: true })
  connection: string;

  @Column({ nullable: true })
  working_hours: string;

  @Column({ nullable: true })
  design: string;

  @Column({ nullable: true })
  frequency_response: string;
}
