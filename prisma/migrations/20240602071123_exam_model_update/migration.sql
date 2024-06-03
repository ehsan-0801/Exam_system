/*
  Warnings:

  - You are about to drop the column `privacy` on the `exam` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "exam" DROP COLUMN "privacy",
ADD COLUMN     "subject" TEXT;
