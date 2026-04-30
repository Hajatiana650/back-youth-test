import { Controller,Get, Post, Body } from '@nestjs/common';
import { ReveilService } from './reveil.service';
import { CreateReveilDto } from './dto/create-reveil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('reveils')
@Controller('reveils')
export class ReveilController {
  constructor(private readonly reveilService: ReveilService) {}

  @Get()
    @ApiOperation({ summary: 'list all reveils' })
    @ApiResponse({ status: 200, description: 'success' })
    async getAllReveils() {
      try {
        const result = await this.reveilService.getAllReveils();
        return result;
      } catch (error) {
        throw error;
      }
    }
  

  @Post()
  @ApiOperation({ summary: 'Créer un réveil' })
  @ApiResponse({ status: 201, description: 'Réveil créé avec succès' })
  async create(@Body() dto: CreateReveilDto) {
    return this.reveilService.create({
      heure_reveil: new Date(dto.heure_reveil),
      jour_actif: dto.jour_actif,
      niveau_de_difficulte: dto.niveau_de_difficulte,
      type_de_validation: dto.type_de_validation,
      duree_limit_son: dto.duree_limit_son,
      user: {
        connect: { id: dto.userId },
      },
    });
  }
}