import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class ActualiteService extends CrudService<
  PrismaService['actualite'],
  Prisma.ActualiteCreateInput,
  Prisma.ActualiteUpdateInput,
  Prisma.ActualiteWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.actualite, {
      auteur: true,
      categorie: true,
    });
  }

  async createActualite(data: Prisma.ActualiteCreateInput) {
    return this.create(data);
  }
}