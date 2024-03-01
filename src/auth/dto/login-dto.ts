import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user-email@gmail.com', description: 'email' })
  email: string;

  @ApiProperty({ example: 'OrHoUVeWFmMqOwd', description: 'password' })
  password: string;
}
