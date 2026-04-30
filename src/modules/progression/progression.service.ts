import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class ProgressionService extends CrudService<
  PrismaService['progression'],
  Prisma.ProgressionCreateInput,
  Prisma.ProgressionUpdateInput,
  Prisma.ProgressionWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.progression, {
      user: true,
    });
  }

  async getProgressionByUserId(userId: number) {
    return this.prisma.progression.findMany({
      where: { userId },
      include: { user: true },
    });
  }

  async createProgression(data: Prisma.ProgressionCreateInput) {
    return this.create(data);
  }
}