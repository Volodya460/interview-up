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
  UseGuards,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';

import { CreateFlashcardDto, UpdateFlashcardDto } from './dto/flashcards.dto';
import {
  QuestionCategory,
  QuestionDifficulty,
} from 'src/generated/prisma/enums';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AtGuard } from 'src/auth/guards/at.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('flashcards')
@UseGuards(AtGuard, RolesGuard)
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Post()
  @Roles('ADMIN')
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
  @Roles('ADMIN')
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
