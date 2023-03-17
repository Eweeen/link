import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt from 'jsonwebtoken';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const arrayRoles = this.reflector.get<string[]>(
      'restrictedRolesForAuth',
      context.getHandler(),
    ) || ['user', 'moderator', 'admin'];

    try {
      const request = context.switchToHttp().getRequest();
      const token: string = request.headers.authorization.split(' ')[1];

      return arrayRoles.includes(jwt.decode(token)['role']);
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
