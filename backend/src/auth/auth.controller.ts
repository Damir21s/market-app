import { LocalAuthGuard } from './guards/local-auth.guard';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

// auth - в строке запроса будет как /auth
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    //возвращает JWT токен и данные юзера без пароля
    return this.authService.login(req.user);
  }

  //если пошел запрос на /register то выполняем register
  @Post('register')
  register(@Body() dto: CreateUserDto) {
    //возвращает созданный профиль
    return this.authService.register(dto);
  }

  // данный токен проверяет - можно ли пользоваться странице profile или нет
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
