import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: UserModel): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async findAllUsers(): Promise<UserModel[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.findOneUser(Number(id));
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: UserModel,
  ): Promise<UserModel> {
    return this.userService.updateUser(Number(id), userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser(Number(id));
  }
}
