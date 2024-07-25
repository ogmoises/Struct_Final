-- CreateTable
CREATE TABLE "Produto" (
    "nome" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dia_do_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Usuario" ("email", "id", "password") SELECT "email", "id", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
