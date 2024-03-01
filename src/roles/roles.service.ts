import { Injectable } from '@nestjs/common';
import { Roles } from './roles';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly usersRepository: Repository<Role>,
  ) {}

  getByValue(role: Roles): Promise<Role> {
    return this.usersRepository.findOneBy({ value: role });
  }
}
