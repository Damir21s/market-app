import { UserService } from 'src/user/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// расшифровка токена для того чтобы узнать емаил и айди юзера
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      //токен в headers
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //проверка на просроченность токена
      ignoreExpiration: false,
      //расшифровка токена
      secretOrKey: 'test',
    });
  }
  //если удалось расшифровать токен, то возвращаем данные юзера,
  //и дальше мы будем использовать этот обьект для того чтобы знать -
  //можно ли находится этому юзеру на такой то странице
  async validate(payload: { sub: number; email: string }) {
    const data = { id: payload.sub, email: payload.email };
    //валидация юзера что он существует
    const user = await this.userService.findByCond(data);
    if (!user) {
      throw new UnauthorizedException('У вас нет доступа к этой странице');
    }
    return {
      id: user.id,
      email: user.email,
      createdAt: user.createAdt,
      updateAt: user.updateAdt,
    };
  }
}
