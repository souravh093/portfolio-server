import { About } from '@prisma/client';
import prisma from '../../../db/db.config';

const createAboutIntoDB = async (payload: About) => {
  const result = await prisma.about.create({
    data: payload,
  });

  return result;
};

const getAboutFromDB = async () => {
  const result = await prisma.about.findFirst();

  return result;
};

const updateAboutIntoDB = async (payload: About) => {
  const isExistAbout = await prisma.about.findFirstOrThrow();

  const result = await prisma.about.update({
    where: {
      id: isExistAbout.id,
    },
    data: payload,
  });

  return result;
};

export const AboutServices = {
  createAboutIntoDB,
  getAboutFromDB,
  updateAboutIntoDB,
};
