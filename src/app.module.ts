import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [AuthModule, UsersModule, CaslModule
    /* ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]) */],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
