import { Module } from '@nestjs/common';
import { CharacteristicsService } from './characteristics.service';
import { CharacteristicsController } from './characteristics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicsEntity } from './entities/characteristic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CharacteristicsEntity])],
  controllers: [CharacteristicsController],
  providers: [CharacteristicsService],
})
export class CharacteristicsModule {}
