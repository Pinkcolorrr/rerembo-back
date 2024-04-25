import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user-email@gmail.com', description: 'email', required: false })
  email?: string;

  @ApiProperty({ example: 'username', description: 'username', required: false })
  username?: string;

  @ApiProperty({ example: 'OrHoUVeWFmMqOwd', description: 'password' })
  password: string;
}
