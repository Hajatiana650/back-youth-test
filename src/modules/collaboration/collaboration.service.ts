import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class CollaborationService extends CrudService<
  PrismaService['collaboration'],
  Prisma.CollaborationCreateInput,
  Prisma.CollaborationUpdateInput,
  Prisma.CollaborationWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.collaboration, {
      createur: true,
      participations: true,
    });
  }

  async getAllCollabs() {
    return this.prisma.collaboration.findMany({
      include: {
        createur: true,
        participations: true,
      },
    });
  }

  async createCollaboration(data: Prisma.CollaborationCreateInput) {
    return this.create(data);
  }
}