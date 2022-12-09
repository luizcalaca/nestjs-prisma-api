-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "completed" BOOLEAN DEFAULT false,
    "user" TEXT NOT NULL
);
