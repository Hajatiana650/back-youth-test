import { Module } from '@nestjs/common';
import { CollaborationService } from './collaboration.service';
import { CollaborationController } from './collaboration.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CollaborationController],
  providers: [CollaborationService, CrudService, PrismaService  ],
})
export class CollaborationModule {}
