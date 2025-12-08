import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlashcardDto, UpdateFlashcardDto } from './dto/flashcards.dto';
import {
  QuestionCategory,
  QuestionDifficulty,
} from 'src/generated/prisma/enums';

@Injectable()
export class FlashcardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateFlashcardDto) {
    return this.prisma.flashcard.create({
      data: dto,
    });
  }

  findAll(category?: QuestionCategory, difficulty?: QuestionDifficulty) {
    return this.prisma.flashcard.findMany({
      where: {
        ...(category ? { category } : {}),
        ...(difficulty ? { difficulty } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const flashcard = await this.prisma.flashcard.findUnique({
      where: { id },
    });

    if (!flashcard) {
      throw new NotFoundException(`Flashcard with id ${id} not found`);
    }

    return flashcard;
  }

  async update(id: number, dto: UpdateFlashcardDto) {
    await this.findOne(id);

    return this.prisma.flashcard.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.flashcard.delete({
      where: { id },
    });

    return { message: `Flashcard with id ${id} deleted` };
  }
}
