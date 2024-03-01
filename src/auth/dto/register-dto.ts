import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user-email@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: 'user-name', description: 'username' })
  readonly username: string;
  @ApiProperty({ example: 'OrHoUVeWFmMqOwd', description: 'password' })
  readonly password: string;
}
