import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Folder } from './folder.entity';
import { FolderDto } from '@src/folder/folder.dto';
import { User } from '@src/users/user.entity';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder)
    private readonly foldersRepository: Repository<Folder>,
  ) {}

  getAll(user: User) {
    return this.foldersRepository.find({ where: { user: { id: user.id } } });
  }

  create(dto: FolderDto, user: User) {
    const folder = this.foldersRepository.create(dto);
    folder.user = user;
    return this.foldersRepository.save(folder);
  }

  async delete(folderId: string, user: User) {
    const folder = await this.foldersRepository.findOne({
      where: { id: folderId },
      relations: ['user'],
    });

    if (!folder) {
      throw new NotFoundException('Folder not found');
    }

    if (folder.user.id !== user.id) {
      throw new ForbiddenException(
        'Folder cannot be deleted while associated with a user',
      );
    }

    await this.foldersRepository.delete(folderId);
  }
}
