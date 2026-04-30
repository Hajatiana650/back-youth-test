import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TypeValidation, Difficulte } from 'generated/prisma/client';

export class CreateReveilDto {
  @ApiProperty({ example: "2026-05-05T05:00:00.000Z" })
  @IsDateString()
  heure_reveil!: string;

  @ApiProperty({ example: "2026-05-05" })
  @IsString()
  jour_actif!: string;

  @ApiProperty()
  @IsString()
  niveau_de_difficulte!: Difficulte;

  @ApiProperty({ enum: TypeValidation })
  @IsEnum(TypeValidation)
  type_de_validation!: TypeValidation;

  @ApiProperty()
  @IsInt()
  duree_limit_son!: number;

  @ApiProperty()
  @IsInt()
  userId!: number;
}