import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import firebaseConfig from '@config/firebase.config';
import { FirebaseService } from '@firebase/firebase.service';

@Global()
@Module({
  imports: [ConfigModule.forFeature(firebaseConfig)],
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
