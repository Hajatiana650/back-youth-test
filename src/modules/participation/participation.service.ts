import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class ParticipationService extends CrudService<
  PrismaService['participation'],
  Prisma.ParticipationCreateInput,
  Prisma.ParticipationUpdateInput,
  Prisma.ParticipationWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.participation, {
      user: true,
      collaboration: true,
      tache: true,
    });
  }

  async createParticipation(data: Prisma.ParticipationCreateInput) {
    return this.create(data);
  }
}