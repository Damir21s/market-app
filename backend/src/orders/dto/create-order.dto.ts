import { UserEntity } from 'src/user/entities/user.entity';

// в dto приходит вся инфромация с фронтенда
export class CreateOrderDto {
  userId: UserEntity;

  devicesId: number[];
}
