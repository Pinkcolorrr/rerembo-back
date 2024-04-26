import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Folder } from './folder.entity';
import { FolderDto } from '@src/folder/folder.dto';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(Folder)
    private readonly usersRepository: Repository<Folder>,
  ) {}

  getAll() {
    return this.usersRepository.find();
  }

  create(dto: FolderDto) {
    const folder = this.usersRepository.create(dto);
    return this.usersRepository.save(folder);
  }
}
