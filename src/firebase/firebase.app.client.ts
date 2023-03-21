import * as firebaseAdmin from 'firebase-admin';
import FirebaseConfigInterface from './firebase.interface';

export function firebaseAppClient(
  configuration: FirebaseConfigInterface,
): firebaseAdmin.app.App {
  configuration.databaseURL = `${process.env.FIREBASE_DATABASE}`;
  firebaseAdmin.initializeApp(configuration);
  return firebaseAdmin.app();
}
