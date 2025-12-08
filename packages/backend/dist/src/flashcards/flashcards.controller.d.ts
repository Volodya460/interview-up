import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto, UpdateFlashcardDto } from './dto/flashcards.dto';
import { QuestionCategory, QuestionDifficulty } from 'src/generated/prisma/enums';
export declare class FlashcardsController {
    private readonly flashcardsService;
    constructor(flashcardsService: FlashcardsService);
    create(dto: CreateFlashcardDto): import("../generated/prisma/models").Prisma__FlashcardClient<{
        question: string;
        answer: string;
        category: QuestionCategory | null;
        difficulty: QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(category?: QuestionCategory, difficulty?: QuestionDifficulty): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        question: string;
        answer: string;
        category: QuestionCategory | null;
        difficulty: QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        question: string;
        answer: string;
        category: QuestionCategory | null;
        difficulty: QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, dto: UpdateFlashcardDto): Promise<{
        question: string;
        answer: string;
        category: QuestionCategory | null;
        difficulty: QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
