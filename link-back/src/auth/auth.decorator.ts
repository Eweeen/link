import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import jwt from 'jsonwebtoken';
import { Role } from 'src/roles/entities/role.entity';
import { RolesGuard } from 'src/roles/roles.guard';
import { User } from 'src/users/entities/user.entity';
import { AuthGuard } from './auth.guard';

export const JwtUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return 0;
    }
    try {
      const token: string = request.headers.authorization.split(' ')[1];
      const decodedToken = jwt.decode(token);
      const user: User = new User();
      user.id = decodedToken['id'];
      user.firstname = decodedToken['firstname'];
      user.lastname = decodedToken['lastname'];
      user.username = decodedToken['username'];
      user.description = decodedToken['description'];
      user.email = decodedToken['email'];
      user.image = decodedToken['image'];
      user.birth_date = decodedToken['birth_date'];
      user.city = decodedToken['city'];
      user.role = new Role();
      return user;
    } catch (e) {
      console.log(e);
      return 0;
    }
  },
);

export function Auth(...roles: ('user' | 'moderator' | 'admin')[]) {
  return applyDecorators(
    SetMetadata('restrictedRolesForAuth', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
