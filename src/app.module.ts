import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CaslModule } from './casl/casl.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import connectionOptions from './ormconfig';

@Module({
  imports: [AuthModule, UsersModule, CaslModule,
    TypeOrmModule.forRoot(connectionOptions),
    CarModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
