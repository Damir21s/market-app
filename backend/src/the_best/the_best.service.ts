import { TheBestEntity } from './entities/the_best.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TheBestService {
  constructor(
    @InjectRepository(TheBestEntity)
    private repository: Repository<TheBestEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }
}
