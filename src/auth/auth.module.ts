import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { FirebaseAuthStrategy } from './passport/firebase-auth.strategy';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FirebaseAuthStrategy],
})
export class AuthModule {}
