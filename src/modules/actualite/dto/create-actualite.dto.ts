import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateActualiteDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  titre!: string;

  @ApiProperty()
  @IsString()
  description!: string;

  @ApiProperty()
  @IsString()
  contenu!: string;

  @ApiProperty()
  @IsInt()
  suggereParId!: number;

  @ApiProperty()
  @IsInt()
  categorieId!: number;
}