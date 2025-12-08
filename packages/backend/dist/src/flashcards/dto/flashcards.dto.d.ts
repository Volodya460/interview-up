import { QuestionCategory, QuestionDifficulty } from 'src/generated/prisma/enums';
export declare class CreateFlashcardDto {
    question: string;
    answer: string;
    category?: QuestionCategory;
    difficulty?: QuestionDifficulty;
}
declare const UpdateFlashcardDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFlashcardDto>>;
export declare class UpdateFlashcardDto extends UpdateFlashcardDto_base {
}
export {};
