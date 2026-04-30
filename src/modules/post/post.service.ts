
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class PostService extends CrudService<
  PrismaService["post"],
  Prisma.PostCreateInput,
  Prisma.PostUpdateInput,
  Prisma.PostWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.post);
  }


  async getAllPosts(){
    return super.findAll();
  }
}
