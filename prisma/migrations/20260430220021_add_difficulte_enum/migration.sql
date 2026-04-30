/*
  Warnings:

  - Changed the type of `niveau_de_difficulte` on the `Reveil` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Difficulte" AS ENUM ('FACILE', 'MOYENNE', 'DIFFICILE');

-- AlterTable
ALTER TABLE "Reveil" DROP COLUMN "niveau_de_difficulte",
ADD COLUMN     "niveau_de_difficulte" "Difficulte" NOT NULL;
