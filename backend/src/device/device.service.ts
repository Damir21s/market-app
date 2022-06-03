import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceEntity } from './entities/device.entity';
import { FilterOperator, PaginateQuery, paginate } from 'nestjs-paginate';
@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceEntity)
    private repository: Repository<DeviceEntity>,
  ) {}

  async findAll(query: PaginateQuery, typeId: number) {
    const queryBuilder = this.repository
      .createQueryBuilder('devices')
      .leftJoinAndSelect('devices.typeId', 'typeId');
    if (typeId) {
      queryBuilder.where('devices.typeId = :typeId', { typeId });
    }

    const result = await paginate<DeviceEntity>(query, queryBuilder, {
      sortableColumns: ['id', 'name'],
      searchableColumns: ['name'],
      filterableColumns: {
        name: [FilterOperator.GTE, FilterOperator.LTE],
      },
    });
    return result;
  }

  async findOne(id: number) {
    let queryBuilder = this.repository.findOne(id, {
      relations: ['typeId', 'characteristics'],
    });
    return queryBuilder;
  }
}
