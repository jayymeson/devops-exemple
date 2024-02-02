import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Ajuste o caminho conforme necessário
import { User as UserModel } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // teste ci/cd
  async createUser(data: UserModel): Promise<UserModel> {
    return this.prisma.user.create({
      data,
    });
  }

  async findAllUsers(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async findOneUser(id: number): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: number, data: UserModel): Promise<UserModel> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number): Promise<UserModel> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
