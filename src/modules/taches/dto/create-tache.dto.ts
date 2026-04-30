import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsInt,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StatutTache, Priorite } from 'generated/prisma/client';

export class CreateTacheDto {
  @ApiProperty()
  @IsString()
  titre!: string;

  @ApiProperty()
  @IsString()
  description!: string;

  @ApiProperty()
  @IsDateString()
  date_prevu!: string;

  @ApiProperty()
  @IsDateString()
  debut_prevu!: string;

  @ApiProperty()
  @IsDateString()
  fin_prevu!: string;

  @ApiProperty({ enum: StatutTache })
  @IsEnum(StatutTache)
  statut!: StatutTache;

  @ApiProperty({ enum: Priorite })
  @IsEnum(Priorite)
  priorite!: Priorite;

  @ApiProperty()
  @IsInt()
  userId!: number;

  @ApiProperty()
  @IsInt()
  categorieId!: number;
}