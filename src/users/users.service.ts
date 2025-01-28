import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'johdoeqqe',
        },
        {
          userId: 2,
          username: 'testTwo',
          password: 'testTwo',
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
