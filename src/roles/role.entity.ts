import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ORoles, Roles } from './roles';

@Entity()
export class Role {
  @ApiProperty({ example: 0, description: 'role id' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ example: 'User', description: 'role of the user' })
  @Column({ type: 'enum', enum: ORoles, default: ORoles.User })
  value: Roles;

  @ApiProperty({
    example: 'This is Admin',
    description: 'description of the role',
  })
  @Column({ nullable: true })
  description?: string;
}
