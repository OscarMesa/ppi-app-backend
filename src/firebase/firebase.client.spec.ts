import { firebaseConfig } from './mocks/firebase.service.mock';
import { firebaseAdminClient } from './firebase.client';

jest.mock('firebase-admin', () => ({
  ...jest.mock('firebase-admin'),
  credential: {
    cert: jest.fn(),
  },
  initializeApp: jest.fn(),
  firestore: jest.fn(),
  apps: [],
  app: () => {
    return {
      database: jest.fn(() => {
        return {
          ref: jest.fn(() => {
            return {
              push: jest.fn(() => {
                return {
                  set: jest.fn(),
                };
              }),
            };
          }),
        };
      }),
    };
  },
}));

describe('firebaseAdminClient', () => {
  it('it should returns a client firebase instance', async () => {
    firebaseAdminClient(firebaseConfig);
  });
});
