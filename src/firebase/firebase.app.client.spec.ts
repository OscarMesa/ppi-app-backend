import { firebaseAppClient } from './firebase.app.client';
import { firebaseConfig } from './mocks/firebase.service.mock';

describe('firebaseAppClient', () => {
  it('it should returns a client firebase instance', async () => {
    firebaseAppClient(firebaseConfig);
  });
});
