import { Controller, Post, Body, Get } from '@nestjs/common';
import { CollaborationService } from './collaboration.service';
import { CreateCollaborationDto } from './dto/create-collaboration.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('collaborations')
@Controller('collaborations')
export class CollaborationController {
  constructor(private readonly collaborationService: CollaborationService) {}

  @Get()
  @ApiOperation({ summary: 'Obtenir toutes les collaborations' })
  @ApiResponse({ status: 200, description: 'Liste des collaborations récupérée avec succès' })
  async findAll() {
    return this.collaborationService.getAllCollabs();
  }
  

  @Post()
  @ApiOperation({ summary: 'Créer une collaboration' })
  @ApiResponse({ status: 201, description: 'Collaboration créée avec succès' })
  async create(@Body() dto: CreateCollaborationDto) {
    return this.collaborationService.create({
      nom_collab: dto.nom_collab,
      statut: dto.statut,
      createur: {
        connect: { id: dto.creeParId },
      },
    });
  }
}