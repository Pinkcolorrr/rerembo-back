import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@src/users/user.entity';

@Entity()
export class Folder {
  @ApiProperty({ example: 0, description: 'folder id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Animals', description: 'folder name' })
  @Column()
  name: string;

  @ManyToOne(() => User)
  user: User;
}
