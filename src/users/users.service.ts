import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { RolesService } from '@src/roles/roles.service';
import { UserMapper } from './user-mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly rolesService: RolesService,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['roles'] });
  }

  get(id: string): Promise<User> {
    return this.usersRepository.findOneOrFail({
      relations: ['roles'],
      where: { id },
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(UserMapper.fromDto(dto));
    user.roles.push(await this.rolesService.getByValue('User'));
    return this.usersRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({
      relations: ['roles'],
      where: { email },
    });
  }

  async getUserByUsername(username: string) {
    return this.usersRepository.findOne({
      relations: ['roles'],
      where: { username },
    });
  }
}
