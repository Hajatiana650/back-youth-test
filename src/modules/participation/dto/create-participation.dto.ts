import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateParticipationDto {
  @ApiProperty()
  @IsInt()
  userId!: number;

  @ApiProperty()
  @IsInt()
  collaborationId!: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  tacheId?: number;
}