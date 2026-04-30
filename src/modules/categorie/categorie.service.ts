import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma/client';
import { CrudService } from 'src/services/crud-service';

@Injectable()
export class CategorieService extends CrudService<
  PrismaService['categorie'],
  Prisma.CategorieCreateInput,
  Prisma.CategorieUpdateInput,
  Prisma.CategorieWhereUniqueInput
> {
  constructor(private prisma: PrismaService) {
    super(prisma.categorie, {
      taches: true,
      actualites: true,
    });
  }

  async getAllCategories() {
    return this.findAll();
  }

  async createCategorie(data: Prisma.CategorieCreateInput) {
    return this.create(data);
  }
}