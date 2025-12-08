-- CreateEnum
CREATE TYPE "QuestionCategory" AS ENUM ('JS', 'HTML_CSS', 'React', 'Node');

-- CreateEnum
CREATE TYPE "QuestionDifficulty" AS ENUM ('junior', 'middle', 'senior');

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" "QuestionCategory",
    "difficulty" "QuestionDifficulty",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);
