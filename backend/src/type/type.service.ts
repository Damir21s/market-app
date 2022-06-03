import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeEntity } from './entities/type.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private repository: Repository<TypeEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }
}
