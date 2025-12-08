import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';

import { CreateFlashcardDto, UpdateFlashcardDto } from './dto/flashcards.dto';
import {
  QuestionCategory,
  QuestionDifficulty,
} from 'src/generated/prisma/enums';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Post()
  create(@Body() dto: CreateFlashcardDto) {
    return this.flashcardsService.create(dto);
  }

  @Get()
  findAll(
    @Query('category') category?: QuestionCategory,
    @Query('difficulty') difficulty?: QuestionDifficulty,
  ) {
    return this.flashcardsService.findAll(category, difficulty);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFlashcardDto,
  ) {
    return this.flashcardsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardsService.remove(id);
  }
}
