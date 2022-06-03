import { PaginateQuery, Paginate } from 'nestjs-paginate';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  findAll(
    @Paginate() query1: PaginateQuery,
    @Query() query2: { typeId: number },
  ) {
    return this.deviceService.findAll(query1, query2.typeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceService.findOne(+id);
  }
}
