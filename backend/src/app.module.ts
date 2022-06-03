import { NewEntity } from './new/entities/new.entity';
import { TheBestEntity } from './the_best/entities/the_best.entity';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TypeModule } from './type/type.module';
import { TypeEntity } from './type/entities/type.entity';
import { DeviceModule } from './device/device.module';
import { DeviceEntity } from './device/entities/device.entity';
import { TheBestModule } from './the_best/the_best.module';
import { NewModule } from './new/new.module';
import { CharacteristicsEntity } from './characteristics/entities/characteristic.entity';
import { CharacteristicsModule } from './characteristics/characteristics.module';
import { OrdersModule } from './orders/orders.module';
import { OrderEntity } from './orders/entities/order.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '4862',
      database: 'nesttest',
      entities: [
        UserEntity,
        TypeEntity,
        DeviceEntity,
        CharacteristicsEntity,
        TheBestEntity,
        NewEntity,
        OrderEntity,
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    TypeModule,
    DeviceModule,
    CharacteristicsModule,
    TheBestModule,
    NewModule,
    OrdersModule,
  ],
})
export class AppModule {}
