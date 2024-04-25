import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-dto';
import { AuthService } from './auth.service';
import { RegisterDto } from '@src/auth/dto/register-dto';
import { AuthInfo } from '@src/auth/models/auth-info';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'login user' })
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: LoginDto })
  @Post('/login')
  async login(@Body() dto: LoginDto): Promise<AuthInfo> {
    return await this.authService.login(dto);
  }

  @ApiOperation({ summary: 'register user' })
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: RegisterDto })
  @Post('/register')
  register(@Body() dto: RegisterDto): Promise<AuthInfo> {
    return this.authService.register(dto);
  }
}
