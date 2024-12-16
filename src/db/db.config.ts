import { PrismaClient, Role } from '@prisma/client';
import config from '../app/config';
import bcryptjs from 'bcryptjs';
const prisma: PrismaClient = new PrismaClient();

export default prisma;

const adminUser = {
  id: 'b9173f97-4d26-4aab-b905-a48f83eea75e',
  email: config.adminEmail || '',
  password: config.adminPass || '',
};

export const seedAdminUser = async () => {
  const isAdminUserExists = await prisma.user.findFirst({
    where: {
      email: config.adminEmail,
    },
  });

  if (!isAdminUserExists) {
    adminUser.password = await bcryptjs.hash(adminUser.password, 10);
    await prisma.adminUser.create({
      data: adminUser,
    });
  }
};
