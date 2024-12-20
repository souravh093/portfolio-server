import { Faq } from '@prisma/client';
import prisma from '../../../db/db.config';

const createFaqIntoDB = async (payload: Faq) => {
  const result = await prisma.faq.create({
    data: payload,
  });

  return result;
};

const getFaqsFromDB = async () => {
  const result = await prisma.faq.findMany();

  return result;
};

const updateFaqFromDB = async (id: string, payload: Faq) => {
  const result = await prisma.faq.update({
    where: { id },
    data: payload,
  });

  return result;
};

const deleteFaqFromDB = async (id: string) => {
  const result = await prisma.faq.delete({
    where: { id },
  });

  return result;
};


export const FaqServices = {
  createFaqIntoDB,
  getFaqsFromDB,
  updateFaqFromDB,
  deleteFaqFromDB,
};
