import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TacheService } from './taches.service';
import { CreateTacheDto } from './dto/create-tache.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateReveilDto } from '../reveil/dto/create-reveil.dto';

@ApiTags('taches')
@Controller('taches')
export class TacheController {
  constructor(private readonly tacheService: TacheService) {}

  @Get('/:id_user')
    @ApiOperation({ summary: 'list all taches' })
    @ApiResponse({ status: 200, description: 'success' })
    async getAllTaches(@Param('id_user') id_user: number) {
      try {
        const result = await this.tacheService.getTachesByUser(id_user);
        return result;
      } catch (error) {
        throw error;
      }
    }
  

  @Post()
  @ApiOperation({ summary: 'Créer une tâche' })
  @ApiResponse({ status: 201, description: 'Tâche créée avec succès' })
  async create(@Body() dto: CreateTacheDto) {
    return this.tacheService.create({
      titre: dto.titre,
      description: dto.description,
      date_prevu: new Date(dto.date_prevu),
      debut_prevu: new Date(dto.debut_prevu),
      fin_prevu: new Date(dto.fin_prevu),
      statut: dto.statut,
      priorite: dto.priorite,
      user: {
        connect: { id: dto.userId },
      },
      categorie: {
        connect: { id: dto.categorieId },
      },
    });
  }
}