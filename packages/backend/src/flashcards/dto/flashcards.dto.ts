import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import {
  QuestionCategory,
  QuestionDifficulty,
} from 'src/generated/prisma/enums';

export class CreateFlashcardDto {
  @IsString()
  @MinLength(5)
  question: string;

  @IsString()
  @MinLength(3)
  answer: string;

  @IsOptional()
  @IsEnum(QuestionCategory)
  category?: QuestionCategory;

  @IsOptional()
  @IsEnum(QuestionDifficulty)
  difficulty?: QuestionDifficulty;
}

export class UpdateFlashcardDto extends PartialType(CreateFlashcardDto) {}
