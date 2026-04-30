import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class TacheService extends CrudService<
  PrismaService['tache'],
  Prisma.TacheCreateInput,
  Prisma.TacheUpdateInput,
  Prisma.TacheWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.tache, { user: true, categorie: true });
  }

  async getTachesByUser(userId: number) {
    return this.prisma.tache.findMany({
      where: { userId },
      include: { user: true, categorie: true },
    });
  }

  async createTache(data: Prisma.TacheCreateInput) {
    return this.create(data);
  }
}