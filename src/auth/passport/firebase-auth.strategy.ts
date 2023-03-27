import { Strategy } from 'passport-custom';
import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as admin from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(req): Promise<DecodedIdToken> {
    const idToken = req.headers.authorization.split(' ')[1];
    Logger.log({ idToken });
    const decoded = await admin.auth().verifyIdToken(idToken);
    return decoded;
  }
}
