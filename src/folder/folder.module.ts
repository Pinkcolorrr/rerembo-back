import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from './folder.entity';
import { FolderService } from './folder.service';
import { FolderController } from './folder.controller';
import { AuthModule } from '@src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Folder]), forwardRef(() => AuthModule)],
  providers: [FolderService],
  controllers: [FolderController],
  exports: [FolderService],
})
export class FolderModule {}
