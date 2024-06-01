/*
  Warnings:

  - The primary key for the `exam` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `answersheet_img` on the `exam` table. All the data in the column will be lost.
  - You are about to drop the column `exam_id` on the `exam` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "exam" DROP CONSTRAINT "exam_pkey",
DROP COLUMN "answersheet_img",
DROP COLUMN "exam_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "exam_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "batch" (
    "id" SERIAL NOT NULL,
    "exam_id" INTEGER NOT NULL,
    "student_name" TEXT,
    "roll_number" TEXT,
    "register_number" TEXT,
    "exam_answers" TEXT,
    "status" TEXT,

    CONSTRAINT "batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batch" ADD CONSTRAINT "batch_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
