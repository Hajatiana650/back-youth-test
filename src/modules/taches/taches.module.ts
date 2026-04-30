import { Module } from '@nestjs/common';
import { TacheService } from './taches.service';
import { TacheController } from './taches.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TacheService, CrudService, PrismaService],
  controllers: [TacheController]
})
export class TacheModule {}
