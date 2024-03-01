import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles';
import { JwtService } from '@nestjs/jwt';
import { User } from '@src/users/user.entity';

const ROLE_GUARD_META_KEY = 'role';
export const RoleGuardMeta = (roles: Roles[]) =>
  SetMetadata(ROLE_GUARD_META_KEY, roles);

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<Roles[]>(
      ROLE_GUARD_META_KEY,
      context.getHandler(),
    );
    const req = context.switchToHttp().getRequest();

    if (!requiredRoles) {
      return true;
    }

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User not authorized' });
      }

      const user: User = this.jwtService.verify(token);
      return user.roles.some((role) => requiredRoles.includes(role.value));
    } catch (err) {
      throw new HttpException({ message: 'Forbidden' }, HttpStatus.FORBIDDEN);
    }
  }
}
