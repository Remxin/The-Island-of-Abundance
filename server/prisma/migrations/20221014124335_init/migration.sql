-- DropForeignKey
ALTER TABLE "Cost" DROP CONSTRAINT "Cost_buildingId_fkey";

-- AddForeignKey
ALTER TABLE "Cost" ADD CONSTRAINT "Cost_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;
