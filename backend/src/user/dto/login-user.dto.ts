import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'Неверная почта | Invalid mail ' })
  email: string;

  @Length(6, 32, {
    message:
      'Пароль должен быть не менее 6 символов | Password must be at least 6 characters',
  })
  password?: string;
}
