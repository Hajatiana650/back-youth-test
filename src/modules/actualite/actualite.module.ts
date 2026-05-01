import { Module } from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { ActualiteController } from './actualite.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ActualiteController],
  providers: [ActualiteService, PrismaService, CrudService],
})
export class ActualiteModule {}
