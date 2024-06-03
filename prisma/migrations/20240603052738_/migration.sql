/*
  Warnings:

  - You are about to drop the column `user_id` on the `exam` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exam" DROP CONSTRAINT "exam_user_id_fkey";

-- AlterTable
ALTER TABLE "exam" DROP COLUMN "user_id";
