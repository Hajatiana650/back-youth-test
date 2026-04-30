import { Module } from '@nestjs/common';
import { ProgressionService } from './progression.service';
import { ProgressionController } from './progression.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProgressionController],
  providers: [ProgressionService, CrudService, PrismaService],
})
export class ProgressionModule {}
