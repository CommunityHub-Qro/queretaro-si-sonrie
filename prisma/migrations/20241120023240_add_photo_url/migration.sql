/*
  Warnings:

  - Added the required column `photoUrl` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `Treatment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "photoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Treatment" ADD COLUMN     "photoUrl" TEXT NOT NULL;
