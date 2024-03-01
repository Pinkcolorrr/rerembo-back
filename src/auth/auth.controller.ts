import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-dto';
import { AuthService } from './auth.service';
import { AuthInfo } from './models/auth-info';
import { RegisterDto } from '@src/auth/dto/register-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'login user' })
  @ApiResponse({ status: 200, type: AuthInfo })
  @ApiBody({ type: LoginDto })
  @Post('/login')
  login(@Body() dto: LoginDto): Promise<AuthInfo> {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'register user' })
  @ApiResponse({ status: 200, type: AuthInfo })
  @ApiBody({ type: RegisterDto })
  @Post('/register')
  register(@Body() dto: RegisterDto): Promise<AuthInfo> {
    return this.authService.register(dto);
  }
}
