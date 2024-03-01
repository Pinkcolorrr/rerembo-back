import { CreateUserDto } from './dto/create-user-dto';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { User } from './user.entity';

export abstract class UserMapper {
  static fromDto(dto: CreateUserDto): DeepPartial<User> {
    return {
      password: dto.password,
      email: dto.email,
      username: dto.username,
      roles: [],
    };
  }
}
