import { UserDTO } from '@auth/dto/user.dto';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

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

  async createUser(user: UserDTO): Promise<UserRecord> {
    const { displayName, password, email } = user;
    return await admin.auth().createUser({ displayName, password, email });
  }
}
