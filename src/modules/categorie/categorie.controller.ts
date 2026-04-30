import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @Get()
  @ApiOperation({ summary: 'Obtenir toutes les catégories' })
  @ApiResponse({ status: 200, description: 'Liste des catégories récupérée avec succès' })
  async findAll() {
    return this.categorieService.getAllCategories();
  }

  @Post()
  @ApiOperation({ summary: 'Créer une catégorie' })
  @ApiResponse({ status: 201, description: 'Catégorie créée avec succès' })
  async create(@Body() dto: CreateCategorieDto) {
    return this.categorieService.create({
      nom_categorie: dto.nom_categorie,
      description: dto.description,
    });
  }
}