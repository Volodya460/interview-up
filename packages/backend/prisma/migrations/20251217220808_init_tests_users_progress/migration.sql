-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "hashed_rt" TEXT DEFAULT '',
    "verify" BOOLEAN NOT NULL DEFAULT false,
    "verificationCode" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTestProgress" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "testId" INTEGER NOT NULL,
    "selectedOptionId" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserTestProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_verificationCode_key" ON "User"("verificationCode");

-- CreateIndex
CREATE INDEX "UserTestProgress_userId_idx" ON "UserTestProgress"("userId");

-- CreateIndex
CREATE INDEX "UserTestProgress_testId_idx" ON "UserTestProgress"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "UserTestProgress_userId_testId_key" ON "UserTestProgress"("userId", "testId");

-- AddForeignKey
ALTER TABLE "UserTestProgress" ADD CONSTRAINT "UserTestProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTestProgress" ADD CONSTRAINT "UserTestProgress_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTestProgress" ADD CONSTRAINT "UserTestProgress_selectedOptionId_fkey" FOREIGN KEY ("selectedOptionId") REFERENCES "TestOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
