import { UserEntity } from 'src/user/entities/user.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByCond({
      email,
      password,
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(data: { id: number; email: string }) {
    const payload = { email: data.email, sub: data.id };
    return this.jwtService.sign(payload);
  }

  async login(user: UserEntity) {
    const { password, ...userData } = user;
    return {
      ...userData,
      access_token: this.generateJwtToken(userData),
    };
  }
  async register(dto: CreateUserDto) {
    try {
      // здесь мы указываем какие конкретно свойста хотим получить с фронтенда,
      // и какие данные скажем сохранить бэкенду
      const { password, ...userData } = await this.userService.create({
        email: dto.email,
        username: dto.username,
        password: dto.password,
      });
      return {
        ...userData,
        access_token: this.generateJwtToken(userData),
      };
    } catch (error) {
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }
}
