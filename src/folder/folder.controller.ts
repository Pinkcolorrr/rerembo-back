import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FolderService } from './folder.service';
import { JwtAuthGuard } from '@src/auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Folder } from './folder.entity';
import { FolderDto } from './folder.dto';
import { CurrentUser } from '@src/utils/decorators/current-user';
import { User } from '@src/users/user.entity';

@Controller('folder')
export class FolderController {
  constructor(private readonly usersService: FolderService) {}

  @ApiOperation({ summary: 'get all folders' })
  @ApiResponse({ status: 200, type: [Folder] })
  @UseGuards(JwtAuthGuard)
  @Get('/getAll')
  getAll(@CurrentUser() user: User) {
    return this.usersService.getAll(user);
  }

  @ApiOperation({ summary: 'create folder' })
  @ApiResponse({ status: 200, type: Folder })
  @ApiBody({ type: FolderDto })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() dto: FolderDto, @CurrentUser() user: User): Promise<Folder> {
    return this.usersService.create(dto, user);
  }

  @ApiOperation({ summary: 'delete folder' })
  @ApiResponse({ status: 200, type: Boolean })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string, @CurrentUser() user: User): Promise<void> {
    return this.usersService.delete(id, user);
  }
}
