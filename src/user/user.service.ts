import { Injectable } from '@nestjs/common';
import { randomUUID, UUID } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    user.uid = randomUUID()
    this.users.push(user);
    console.log(user);
  }

  getUser(uid: UUID): CreateUserDto {
    return this.users.find(user => user.uid === uid)
  }
  
  getUserByEmail(email: string): CreateUserDto {
    return this.users.find(user => user.email === email)
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }
}
