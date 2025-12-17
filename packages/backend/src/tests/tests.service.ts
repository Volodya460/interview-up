import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestDto, UpdateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestsService {
  constructor(private readonly prisma: PrismaService) {}

  private ensureExactlyOneCorrect(options: { isCorrect: boolean }[]) {
    const correctCount = options.filter((o) => o.isCorrect).length;

    if (correctCount === 0) {
      throw new BadRequestException('At least one option must be correct');
    }

    if (correctCount > 1) {
      throw new BadRequestException('Only one option can be correct');
    }
  }

  create(dto: CreateTestDto) {
    this.ensureExactlyOneCorrect(dto.options);

    return this.prisma.test.create({
      data: {
        question: dto.question,
        description: dto.description,
        category: dto.category,
        difficulty: dto.difficulty,
        options: {
          create: dto.options.map((o) => ({
            text: o.text,
            isCorrect: o.isCorrect,
          })),
        },
      },
      include: { options: true },
    });
  }

  findAll() {
    return this.prisma.test.findMany({
      include: { options: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const test = await this.prisma.test.findUnique({
      where: { id },
      include: { options: true },
    });

    if (!test) {
      throw new NotFoundException(`Test with id ${id} not found`);
    }

    return test;
  }

  async update(id: number, dto: UpdateTestDto) {
    await this.findOne(id);

    this.ensureExactlyOneCorrect(dto.options);

    return this.prisma.test.update({
      where: { id },
      data: {
        question: dto.question,
        description: dto.description,
        category: dto.category,
        difficulty: dto.difficulty,
        options: {
          deleteMany: {}, // удалить все старые
          create: dto.options.map((o) => ({
            text: o.text,
            isCorrect: o.isCorrect,
          })),
        },
      },
      include: { options: true },
    });
  }
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.test.delete({ where: { id } });

    return { message: `Test with id ${id} deleted` };
  }
}
