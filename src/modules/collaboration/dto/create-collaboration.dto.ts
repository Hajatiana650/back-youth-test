import { IsNotEmpty, IsString, IsEnum, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StatutCollaboration } from 'generated/prisma/client';

export class CreateCollaborationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nom_collab!: string;

  @ApiProperty({ enum: StatutCollaboration })
  @IsEnum(StatutCollaboration)
  statut!: StatutCollaboration;

  @ApiProperty()
  @IsInt()
  creeParId!: number;
}