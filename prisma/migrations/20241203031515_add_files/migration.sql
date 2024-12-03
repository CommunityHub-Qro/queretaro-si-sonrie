/*
  Warnings:

  - Added the required column `doctor` to the `Treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `external` to the `Treatment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "active" BOOLEAN,
ADD COLUMN     "sex" BOOLEAN,
ALTER COLUMN "photoUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Treatment" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "doctor" TEXT NOT NULL,
ADD COLUMN     "external" BOOLEAN NOT NULL;
