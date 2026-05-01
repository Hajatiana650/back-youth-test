import { Controller, Post, Body } from '@nestjs/common';
import { ParticipationService } from './participation.service';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('participations')
@Controller('participations')
export class ParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une participation (user rejoint une collaboration)' })
  @ApiResponse({ status: 201, description: 'Participation créée avec succès' })
  async create(@Body() dto: CreateParticipationDto) {
    return this.participationService.create({
      user: {
        connect: { id: dto.userId },
      },
      collaboration: {
        connect: { id: dto.collaborationId },
      },
      ...(dto.tacheId && {
        tache: {
          connect: { id: dto.tacheId },
        },
      }),
    });
  }
}