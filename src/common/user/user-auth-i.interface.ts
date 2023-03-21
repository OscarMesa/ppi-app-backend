import { Request } from 'express';
import { UserFirebaseDTO } from './user.firebase.dto';

export interface UserAuthI extends Request {
  user: UserFirebaseDTO;
}
