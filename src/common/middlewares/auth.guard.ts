import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { FirebaseService } from '@firebase/firebase.service';
import { LoggerError } from '@common/logger/logger.ppi.dto';
import { loggerHandler } from '@utils/error.handler';
import { UsersRepository } from '@users/repositories/users.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
    @Inject(FirebaseService) private readonly firebaseService: FirebaseService,
  ) {}
  private readonly defaultScopeCountryId = 6;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { headers } = req;
    const authorization = headers.authorization || headers.Authorization;
    const token = authorization ? authorization.substring(7) : null;
    if (!authorization) {
      return false;
    } else {
      try {
        const uid = await this.firebaseService.verifyIdToken(token);
        if (!uid) {
          return false;
        } else {
          return await this.validateUserByUid(req, uid);
        }
      } catch (error) {
        const dataError: LoggerError = {
          functionName: this.canActivate.name,
          error,
          message: 'Error while validating token authenticity',
        };
        loggerHandler(error, dataError);
        return false;
      }
    }
  }

  private async validateUserByUid(req, uid: string): Promise<boolean> {
    const user = await this.usersRepository.getOne(uid);
    if (user) {
      req.user = user;
      req.user.countryScope = [
        typeof req.user.city === 'undefined' ||
        typeof req.user.city.countryId === 'undefined'
          ? this.defaultScopeCountryId
          : req.user.city.countryId,
      ];
      req.userDB = user;
      return true;
    } else {
      return false;
    }
  }
}
