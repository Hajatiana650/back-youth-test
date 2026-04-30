import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProgressionDto {
  @ApiProperty()
  @IsInt()
  point!: number;

  @ApiProperty()
  @IsNumber()
  taux_achevement!: number;

  @ApiProperty()
  @IsNumber()
  taux_ponctualite!: number;

  @ApiProperty({ example: "2026-04" })
  @IsString()
  periode!: string;

  @ApiProperty()
  @IsInt()
  userId!: number;
}