/*
  Warnings:

  - Added the required column `mapSize` to the `GameObject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamps` to the `GameObject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turnTime` to the `GameObject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameObject" ADD COLUMN     "mapSize" TEXT NOT NULL,
ADD COLUMN     "timestamps" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "turnTime" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "gameId" DROP DEFAULT;
