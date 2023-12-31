import { Controller, Post, Body } from '@nestjs/common';

import { LoginDto, SignupDto } from '../dto/auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post('/login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
