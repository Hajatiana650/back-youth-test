import { Module } from '@nestjs/common';
import { ParticipationService } from './participation.service';
import { ParticipationController } from './participation.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ParticipationController],
  providers: [ParticipationService, CrudService, PrismaService],
})
export class ParticipationModule {}
