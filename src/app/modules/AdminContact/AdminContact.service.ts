import { AdminContact } from '@prisma/client';
import prisma from '../../../db/db.config';

const createAdminContactIntoDB = async (payload: AdminContact) => {
  const result = await prisma.adminContact.create({
    data: payload,
  });

  return result;
};

const getAdminContactFromDB = async () => {
  const result = await prisma.adminContact.findFirstOrThrow();

  return result;
};

const updateAdminContactIntoDB = async (id: string, payload: AdminContact) => {
  const result = await prisma.adminContact.update({
    where: { id },
    data: payload,
  });

  return result;
};

export const AdminContactService = {
  createAdminContactIntoDB,
  getAdminContactFromDB,
  updateAdminContactIntoDB,
};
