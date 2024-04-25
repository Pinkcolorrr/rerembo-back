import { User } from '@src/users/user.entity';

export class JwtPayload {
  email: User['email'];
  username: User['username'];
  id: User['id'];
  roles: User['roles'];
}
