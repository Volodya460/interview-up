import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestDto, UpdateTestDto } from './dto/create-test.dto';
export declare class TestsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private ensureExactlyOneCorrect;
    create(dto: CreateTestDto): import("../generated/prisma/models").Prisma__TestClient<{
        options: {
            id: number;
            text: string;
            isCorrect: boolean;
            testId: number;
        }[];
    } & {
        question: string;
        category: import("../generated/prisma/enums").QuestionCategory | null;
        difficulty: import("../generated/prisma/enums").QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        description: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        options: {
            id: number;
            text: string;
            isCorrect: boolean;
            testId: number;
        }[];
    } & {
        question: string;
        category: import("../generated/prisma/enums").QuestionCategory | null;
        difficulty: import("../generated/prisma/enums").QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        description: string | null;
    })[]>;
    findOne(id: number): Promise<{
        options: {
            id: number;
            text: string;
            isCorrect: boolean;
            testId: number;
        }[];
    } & {
        question: string;
        category: import("../generated/prisma/enums").QuestionCategory | null;
        difficulty: import("../generated/prisma/enums").QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        description: string | null;
    }>;
    update(id: number, dto: UpdateTestDto): Promise<{
        options: {
            id: number;
            text: string;
            isCorrect: boolean;
            testId: number;
        }[];
    } & {
        question: string;
        category: import("../generated/prisma/enums").QuestionCategory | null;
        difficulty: import("../generated/prisma/enums").QuestionDifficulty | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        description: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
