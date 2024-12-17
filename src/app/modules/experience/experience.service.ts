import { Experience } from '@prisma/client';
import prisma from '../../../db/db.config';

const createExperienceIntoDB = async (payload: Experience) => {
  const result = await prisma.experience.create({
    data: payload,
  });

  return result;
};

const getExperienceFromDB = async () => {
  const result = await prisma.experience.findMany();

  return result;
};

const updateExperienceIntoDB = async (id: string, payload: Experience) => {
  await prisma.experience.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.experience.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteExperienceFromDB = async (id: string) => {
  await prisma.experience.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.experience.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ExperienceServices = {
  createExperienceIntoDB,
  getExperienceFromDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
};
