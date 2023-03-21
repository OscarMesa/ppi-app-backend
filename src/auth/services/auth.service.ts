import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  async generateToken(uid: string): Promise<string> {
    const customToken = await admin.auth().createCustomToken(uid);
    return customToken;
  }

  generateRedirectUrl(token: string): string {
    const redirectUrl = `https://localhost:3003?token=${token}`;
    return redirectUrl;
  }
}
