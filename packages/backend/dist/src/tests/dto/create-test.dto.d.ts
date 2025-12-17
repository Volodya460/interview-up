import { QuestionCategory, QuestionDifficulty } from 'src/generated/prisma/enums';
declare class CreateTestOptionDto {
    text: string;
    isCorrect: boolean;
}
export declare class CreateTestDto {
    question: string;
    description?: string;
    category: QuestionCategory;
    difficulty: QuestionDifficulty;
    options: CreateTestOptionDto[];
}
export declare class UpdateTestDto extends CreateTestDto {
}
export {};
