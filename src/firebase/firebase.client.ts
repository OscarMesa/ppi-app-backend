import * as firebaseAdmin from 'firebase-admin';
import FirebaseConfigInterface from '@firebase/firebase.interface';

export function firebaseAdminClient(
  configuration: FirebaseConfigInterface,
): firebaseAdmin.app.App {
  if (firebaseAdmin.apps.length === 0) {
    return firebaseAdmin.initializeApp(configuration);
  }
  return firebaseAdmin.app();
}
