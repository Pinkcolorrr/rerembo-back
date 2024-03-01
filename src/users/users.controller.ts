import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { RoleGuard, RoleGuardMeta } from '@src/roles/role.guard';
import { ORoles } from '@src/roles/roles';
import { UserDto } from '@src/users/dto/user-dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('ping')
  ping() {
    return {
      ping: 'ping',
    };
  }

  @ApiOperation({ summary: 'delete user' })
  @ApiResponse({ status: 200, type: null })
  @UseGuards(RoleGuard)
  @RoleGuardMeta([ORoles.Admin])
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(RoleGuard)
  @RoleGuardMeta([ORoles.Admin])
  @Get('/getAll')
  async getAll(): Promise<UserDto[]> {
    const users = await this.usersService.getAll();
    return users.map((user) => this.handleUser(user));
  }

  @ApiOperation({ summary: 'get user by id' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(RoleGuard)
  @RoleGuardMeta([ORoles.Admin])
  @Get(':id')
  async get(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.get(id);
    return this.handleUser(user);
  }

  private handleUser(user: User): UserDto {
    const roles = user.roles.map((role) => role.value);

    return {
      ...user,
      roles,
    };
  }
}
