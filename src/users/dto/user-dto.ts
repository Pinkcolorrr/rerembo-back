import { Roles } from '@src/roles/roles';

export class UserDto {
  id: string;
  username: string;
  email: string;
  password: string;
  roles: Roles[];
}
