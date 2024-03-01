import { User } from '@src/users/user.entity';

export class JwtPayload {
  email: User['email'];
  id: User['id'];
  roles: User['roles'];
}
