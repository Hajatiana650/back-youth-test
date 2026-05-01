import { Controller, Post, Body } from '@nestjs/common';
import { ActualiteService } from './actualite.service';
import { CreateActualiteDto } from './dto/create-actualite.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('actualites')
@Controller('actualites')
export class ActualiteController {
  constructor(private readonly actualiteService: ActualiteService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une actualité' })
  @ApiResponse({ status: 201, description: 'Actualité créée avec succès' })
  async create(@Body() dto: CreateActualiteDto) {
    return this.actualiteService.create({
      titre: dto.titre,
      description: dto.description,
      contenu: dto.contenu,
      auteur: {
        connect: { id: dto.suggereParId },
      },
      categorie: {
        connect: { id: dto.categorieId },
      },
    });
  }
}