import { AuthService } from '@auth/services/auth.service';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('custom'))
  @Post('login')
  async login(@Request() req): Promise<object> {
    const { uid, email, emailVerified } = req.user;

    // Use the AuthService to generate a token and redirect the user to the app.
    const token = await this.authService.generateToken(uid);
    const redirectUrl = this.authService.generateRedirectUrl(token);

    return {
      uid,
      email,
      emailVerified,
      redirectUrl,
    };
  }
}
