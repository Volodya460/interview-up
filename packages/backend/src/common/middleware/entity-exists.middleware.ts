import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
type EntityName = 'flashcards' | 'tests';

@Injectable()
export class EntityExistsMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) {
      throw new BadRequestException('Missing "id" in route params');
    }

    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new BadRequestException('Param "id" must be a number');
    }

    let record: unknown;

    const firstSegment = req.baseUrl.replace(/^\//, '') as EntityName;

    switch (firstSegment) {
      case 'flashcards':
        record = await this.prisma.flashcard.findUnique({
          where: { id: numericId },
        });
        break;

      case 'tests':
        record = await this.prisma.test.findUnique({
          where: { id: numericId },
        });
        break;
    }

    if (!record) {
      throw new NotFoundException(
        `${firstSegment} with ID "${numericId}" not found`,
      );
    }

    next();
  }
}
