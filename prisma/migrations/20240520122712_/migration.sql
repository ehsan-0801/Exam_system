-- CreateTable
CREATE TABLE "organization" (
    "id" TEXT NOT NULL,
    "org_name" TEXT,
    "address" TEXT,
    "purchased_date" TIMESTAMP(3) NOT NULL,
    "expiry_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);
