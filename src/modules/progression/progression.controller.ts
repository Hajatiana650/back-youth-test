import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressionService } from './progression.service';
import { CreateProgressionDto } from './dto/create-progression.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('progressions')
@Controller('progression')
export class ProgressionController {
  constructor(private readonly progressionService: ProgressionService) {}

  @Get('user/:userId')
  @ApiOperation({ summary: 'Obtenir les progressions d un utilisateur' })
  @ApiResponse({ status: 200, description: 'Progressions récupérées avec succès' })
  async getProgressionByUserId(@Param('userId') userId: number) {
    return this.progressionService.getProgressionByUserId(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une progression utilisateur' })
  @ApiResponse({ status: 201, description: 'Progression créée avec succès' })
  async create(@Body() dto: CreateProgressionDto) {
    return this.progressionService.create({
      point: dto.point,
      taux_achevement: dto.taux_achevement,
      taux_ponctualite: dto.taux_ponctualite,
      periode: dto.periode,
      user: {
        connect: { id: dto.userId },
      },
    });
  }

}
