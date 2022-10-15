/*
  Warnings:

  - You are about to drop the column `costId` on the `Building` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[buildingId]` on the table `Cost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `buildingId` to the `Cost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Building" DROP CONSTRAINT "Building_costId_fkey";

-- DropIndex
DROP INDEX "Building_costId_key";

-- AlterTable
ALTER TABLE "Building" DROP COLUMN "costId";

-- AlterTable
ALTER TABLE "Cost" ADD COLUMN     "buildingId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cost_buildingId_key" ON "Cost"("buildingId");

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
