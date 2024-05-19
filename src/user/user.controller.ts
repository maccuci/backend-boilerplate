import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UUID } from 'node:crypto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get("/list/:uid")
  async getUser(@Param("uid") uid: UUID) {
    const user = this.userService.getUser(uid);
  
    if (!user) {
      throw new Error("The user was'nt found.")
    }
  
    return { user };
  }

  @Get("/find_email/:email")
  async getUserByEmail(@Param("email") email: string) {
    const user = this.userService.getUserByEmail(email);
  
    if (!user) {
      throw new Error("The user was not found.")
    }
  
    return { user };
  }

  //TODO Do it later
  @Get("/login")
  async loginUser(@Request() req) {
    
  }

  @Get("all")
  async findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }
}
