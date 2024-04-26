import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FolderService } from './folder.service';
import { JwtAuthGuard } from '@src/auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Folder } from './folder.entity';
import { FolderDto } from './folder.dto';

@Controller('folder')
export class FolderController {
  constructor(private readonly usersService: FolderService) {}

  @ApiOperation({ summary: 'get all folders' })
  @ApiResponse({ status: 200, type: [Folder] })
  @Get('/getAll')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.usersService.getAll();
  }

  @ApiOperation({ summary: 'create folder' })
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: FolderDto })
  @Post('/create')
  create(@Body() dto: FolderDto): Promise<Folder> {
    console.log('asd');
    return this.usersService.create(dto);
  }
}
