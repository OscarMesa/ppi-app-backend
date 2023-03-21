import { FirebaseService } from '@firebase/firebase.service';
import {
  verifyIdToken,
  firebaseConfig,
} from '@firebase/mocks/firebase.service.mock';
import {
  AutomaticAssignmentsForFirebase,
  AutomaticAssignmentsStatus,
} from '@schedule/dto/schedule.dto';
import { faker } from '@faker-js/faker';

jest.mock('firebase-admin', () => ({
  ...jest.mock('firebase-admin'),
  credential: {
    cert: jest.fn(),
  },
  initializeApp: jest.fn(),
  firestore: jest.fn(),
  apps: [{}],
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
              update: jest.fn(),
            };
          }),
        };
      }),
      auth: jest.fn(() => {
        return {
          verifyIdToken: jest.fn(() => verifyIdToken.infoToken),
        };
      }),
    };
  },
}));
describe('FirebaseService', () => {
  let firebaseService: FirebaseService;
  beforeEach(async () => {
    firebaseService = new FirebaseService(firebaseConfig);
  });

  it('should be defined', () => {
    expect(firebaseService).toBeDefined();
  });

  describe('verifyIdToken', () => {
    it('it should returns the uid of the successfully sent token', async () => {
      const uid = await firebaseService.verifyIdToken(verifyIdToken.token);
      expect(uid).toEqual(verifyIdToken.infoToken.uid);
    });
  });

  describe('updateAutomaticAssignmentsStatus', () => {
    it('it should update the response of the automatic assignment', async () => {
      const result = await firebaseService.updateAutomaticAssignmentsStatus(
        'vPISFRat9LPdQZX34iC4XWY9xVE3',
        AutomaticAssignmentsStatus.STARTED,
      );

      expect(result).toEqual(undefined);
    });
  });

  describe('saveAssignmentDriversResponse', () => {
    it('it should save the response of the automatic assignment', async () => {
      const response = {} as AutomaticAssignmentsForFirebase;
      const adminId = faker.datatype.string();
      const countryCode = faker.datatype.string();
      const read = faker.datatype.boolean();

      const result = await firebaseService.saveAssignmentDriversResponse(
        adminId,
        countryCode,
        response,
        read,
      );

      expect(result).toEqual(undefined);
    });
  });
});
