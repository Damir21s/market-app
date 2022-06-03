import { Controller, Get, Param } from '@nestjs/common';
import { NewService } from './new.service';

@Controller('new')
export class NewController {
  constructor(private readonly newService: NewService) {}

  @Get()
  findAll() {
    return this.newService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newService.findOne(+id);
  }
}
