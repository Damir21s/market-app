import { NewEntity } from './entities/new.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NewService {
  constructor(
    @InjectRepository(NewEntity)
    private repository: Repository<NewEntity>,
  ) {}

  async findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }
}
