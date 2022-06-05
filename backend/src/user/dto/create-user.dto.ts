import { UserEntity } from './../entities/user.entity';
import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';

export class CreateUserDto {
  @Length(3, 32, {
    message:
      'Имя должно быть не менее 3-х символов | Username must be at least 3 characters',
  })
  username: string;

  @IsEmail(undefined, { message: 'Неверная почта|Invalid mail' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже существует | This mail already exists.',
  })
  email: string;

  @Length(6, 32, {
    message:
      'Пароль должен быть не менее 6 символов | Password must be at least 6 characters',
  })
  password?: string;
}
