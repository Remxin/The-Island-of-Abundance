-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Building" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "costId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "functionalities" TEXT NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cost" (
    "id" TEXT NOT NULL,
    "ducats" INTEGER NOT NULL DEFAULT 0,
    "wood" INTEGER NOT NULL DEFAULT 0,
    "stone" INTEGER NOT NULL DEFAULT 0,
    "clay" INTEGER NOT NULL DEFAULT 0,
    "wheat" INTEGER NOT NULL DEFAULT 0,
    "meat" INTEGER NOT NULL DEFAULT 0,
    "fish" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "securityLevel" INTEGER NOT NULL,
    "discounts" INTEGER NOT NULL,
    "movement" INTEGER NOT NULL,
    "plunderChange" DOUBLE PRECISION NOT NULL,
    "costId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "action" TEXT NOT NULL,

    CONSTRAINT "Developement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Building_id_key" ON "Building"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Building_name_key" ON "Building"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Building_imgUrl_key" ON "Building"("imgUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Building_costId_key" ON "Building"("costId");

-- CreateIndex
CREATE UNIQUE INDEX "Cost_id_key" ON "Cost"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_id_key" ON "Cart"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_level_key" ON "Cart"("level");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_costId_key" ON "Cart"("costId");

-- CreateIndex
CREATE UNIQUE INDEX "Developement_id_key" ON "Developement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Developement_name_key" ON "Developement"("name");

-- AddForeignKey
ALTER TABLE "Building" ADD CONSTRAINT "Building_costId_fkey" FOREIGN KEY ("costId") REFERENCES "Cost"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_costId_fkey" FOREIGN KEY ("costId") REFERENCES "Cost"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
