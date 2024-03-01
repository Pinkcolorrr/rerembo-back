import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@src/roles/role.entity';

@Entity()
export class User {
  @ApiProperty({
    example: '6fedf5f7-8666-476b-a1c3-8bcf55a921bc',
    description: 'uuid of user',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'user-name', description: 'username' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'user-email@gmail.com', description: 'email' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'OrHoUVeWFmMqOwd', description: 'password' })
  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
