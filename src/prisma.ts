import { PrismaClient } from "@prisma/client";

const prismaglobal = global as unknown as {
  prisma?: PrismaClient;
};

const prisma = prismaglobal.prisma ?? new PrismaClient();

prismaglobal.prisma = prisma;

export default prisma;
