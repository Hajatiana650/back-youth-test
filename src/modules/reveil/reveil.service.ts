import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class ReveilService extends CrudService<
  PrismaService['reveil'],
  Prisma.ReveilCreateInput,
  Prisma.ReveilUpdateInput,
  Prisma.ReveilWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.reveil, { user: true });
  }

  async getAllReveils(){
    return super.findAll();
  }


  async createReveil(data: Prisma.ReveilCreateInput) {
    return this.create(data);
  }
}