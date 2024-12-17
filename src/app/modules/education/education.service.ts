import { Education } from '@prisma/client';
import prisma from '../../../db/db.config';

const createEducationIntoDB = async (payload: Education) => {
  const result = await prisma.education.create({
    data: payload,
  });

  return result;
};

const getEducationFromDB = async () => {
  const result = await prisma.education.findMany();

  return result;
};

const updateEducationIntoDB = async (id: string, payload: Education) => {
  await prisma.education.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.education.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteEducationFromDB = async (id: string) => {
  await prisma.education.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.education.delete({
    where: {
      id,
    },
  });

  return result;
};

export const EducationServices = {
  createEducationIntoDB,
  getEducationFromDB,
  updateEducationIntoDB,
  deleteEducationFromDB,
};
