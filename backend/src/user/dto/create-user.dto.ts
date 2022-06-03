import { UserEntity } from './../entities/user.entity';
import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';

// в dto приходит вся инфромация с фронтенда
export class CreateUserDto {
  @Length(3, 32, { message: 'Имя должно быть не менее 3-х символов' })
  username: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже существует',
  })
  email: string;

  @Length(6, 32, { message: 'Пароль должен быть не менее 6 символов' })
  password?: string;
}
