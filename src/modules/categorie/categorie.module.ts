import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategorieController],
  providers: [CategorieService, CrudService, PrismaService],
})
export class CategorieModule {}
