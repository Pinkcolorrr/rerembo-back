import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Folder {
  @ApiProperty({ example: 0, description: 'folder id' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ example: 'Animals', description: 'folder name' })
  @Column()
  name: string;
}
