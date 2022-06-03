import { Controller, Get, Param } from '@nestjs/common';
import { TheBestService } from './the_best.service';

@Controller('the_best')
export class TheBestController {
  constructor(private readonly theBestService: TheBestService) {}

  @Get()
  findAll() {
    return this.theBestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theBestService.findOne(+id);
  }
}
