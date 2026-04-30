import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategorieDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nom_categorie!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}