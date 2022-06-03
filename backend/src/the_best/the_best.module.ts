import { TheBestEntity } from './entities/the_best.entity';
import { Module } from '@nestjs/common';
import { TheBestService } from './the_best.service';
import { TheBestController } from './the_best.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TheBestEntity])],
  controllers: [TheBestController],
  providers: [TheBestService],
})
export class TheBestModule {}
