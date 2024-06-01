-- CreateTable
CREATE TABLE "exam" (
    "exam_id" SERIAL NOT NULL,
    "exam_type" TEXT,
    "mcq_category" TEXT,
    "correct_ans" TEXT,
    "Wrong_ans" TEXT,
    "privacy" TEXT,
    "bubble_threshold" TEXT,
    "answersheet_img" TEXT,

    CONSTRAINT "exam_pkey" PRIMARY KEY ("exam_id")
);
