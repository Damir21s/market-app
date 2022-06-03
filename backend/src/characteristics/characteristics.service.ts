import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacteristicsEntity } from './entities/characteristic.entity';

@Injectable()
export class CharacteristicsService {
  constructor(
    @InjectRepository(CharacteristicsEntity)
    private repository: Repository<CharacteristicsEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }
}
