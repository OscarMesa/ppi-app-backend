import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { FirebaseAuthStrategy } from './passport/firebase-auth.strategy';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController, UserController],
  providers: [AuthService, FirebaseAuthStrategy],
})
export class AuthModule {}
