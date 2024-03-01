import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { RolesModule } from '@src/roles/roles.module';
import { AuthModule } from '@src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
