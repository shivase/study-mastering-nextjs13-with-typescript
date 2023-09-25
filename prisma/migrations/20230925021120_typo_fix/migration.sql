/*
  Warnings:

  - You are about to drop the column `hashedPasword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hashedPasword`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;
