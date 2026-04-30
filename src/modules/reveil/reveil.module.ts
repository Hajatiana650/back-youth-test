import { Module } from '@nestjs/common';
import { ReveilService } from './reveil.service';
import { ReveilController } from './reveil.controller';
import { CrudService } from 'src/services/crud-service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ReveilService, CrudService, PrismaService],
  controllers: [ReveilController]
})
export class ReveilModule {}
