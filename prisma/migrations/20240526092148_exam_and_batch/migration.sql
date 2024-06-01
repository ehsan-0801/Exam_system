/*
  Warnings:

  - Added the required column `exam_date` to the `exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exam" ADD COLUMN     "exam_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT;
