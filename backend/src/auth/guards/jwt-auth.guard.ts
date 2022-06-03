import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
//Проверка доступности в том или ином эндпоинте к данным
export class JwtAuthGuard extends AuthGuard('jwt') {}
