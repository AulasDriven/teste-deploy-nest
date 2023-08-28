import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client'

@Injectable()
export class AppService {
  getHello(): string {
    return "I'm okay!";
  }
  getUsers() {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
  }
}
