import { User } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(private readonly instance: EntityManager) {}
  public getOne(uid: string): Promise<User | undefined> {
    return this.instance
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.uid = :uid ')
      .setParameters({ uid })
      .getOne();
  }

  public getOneByUserId(userId: number): Promise<User> {
    return this.instance
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.id = :userId ')
      .setParameters({ userId })
      .getOne();
  }
}
