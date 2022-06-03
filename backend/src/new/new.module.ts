import { Module } from '@nestjs/common';
import { NewService } from './new.service';
import { NewController } from './new.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewEntity } from './entities/new.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewEntity])],
  controllers: [NewController],
  providers: [NewService],
})
export class NewModule {}
