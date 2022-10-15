-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gameId" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "GameObject" (
    "id" TEXT NOT NULL,
    "maxPlayers" INTEGER NOT NULL DEFAULT 4,

    CONSTRAINT "GameObject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameObject_id_key" ON "GameObject"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "GameObject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
