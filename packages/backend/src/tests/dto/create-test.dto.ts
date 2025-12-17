import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  QuestionCategory,
  QuestionDifficulty,
} from 'src/generated/prisma/enums';

class CreateTestOptionDto {
  @IsString()
  @MinLength(1)
  text: string;

  @IsBoolean()
  isCorrect: boolean;
}

export class CreateTestDto {
  @IsString()
  @MinLength(5)
  question: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(QuestionCategory)
  category: QuestionCategory;

  @IsEnum(QuestionDifficulty)
  difficulty: QuestionDifficulty;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(4)
  @ValidateNested({ each: true })
  @Type(() => CreateTestOptionDto)
  options: CreateTestOptionDto[];
}

export class UpdateTestDto extends CreateTestDto {}
