import { Inject, Injectable } from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';
import firebaseConfig from '@config/firebase.config';
import { ConfigType } from '@nestjs/config';
import { firebaseAdminClient } from '@firebase/firebase.client';
import { firebaseAppClient } from '@firebase/firebase.app.client';

@Injectable()
export class FirebaseService {
  firebaseAdminClient: firebaseAdmin.app.App;
  firebaseAppClient: firebaseAdmin.app.App;
  constructor(
    @Inject(firebaseConfig.KEY)
    public readonly firebaseConfiguration: ConfigType<typeof firebaseConfig>,
  ) {
    this.firebaseAppClient = firebaseAppClient(this.firebaseConfiguration);
    this.firebaseAdminClient = firebaseAdminClient(this.firebaseConfiguration);
  }

  async verifyIdToken(token: string): Promise<string> {
    const { uid } = await this.firebaseAdminClient.auth().verifyIdToken(token);
    return uid;
  }
}
