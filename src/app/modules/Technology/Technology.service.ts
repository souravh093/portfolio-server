import { Technology } from '@prisma/client';
import prisma from '../../../db/db.config';

const createTechnologyIntoDB = async (payload: Technology) => {
  const result = await prisma.technology.create({
    data: payload,
  });

  return result;
};

const getTechnologiesFromDB = async () => {
  const result = await prisma.technology.findMany();

  return result;
};


const getTechnologyByIdFromDB = async (id: string) => {
  const result = await prisma.technology.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateTechnologyByIdInDB = async (id: string, payload: Technology) => {
  const result = await prisma.technology.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteTechnologyByIdFromDB = async (id: string) => {
  const result = await prisma.technology.delete({
    where: {
      id,
    },
  });

  return result;
};

export const TechnologyServices = {
  createTechnologyIntoDB,
  getTechnologiesFromDB,
  getTechnologyByIdFromDB,
  updateTechnologyByIdInDB,
  deleteTechnologyByIdFromDB,
};
