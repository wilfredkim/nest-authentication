import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [AuthModule, UsersModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
