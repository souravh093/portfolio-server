import { TechnologyCategory } from '@prisma/client';
import prisma from '../../../db/db.config';

const createTechnologyCategoryIntoDB = async (payload: TechnologyCategory) => {
  const result = await prisma.technologyCategory.create({
    data: payload,
  });

  return result;
};

const getTechnologyCategoryFromDB = async (id: string) => {
  const result = await prisma.technologyCategory.findUnique({
    where: {
      id,
    },
    include: {
      Technology: true,
    },
  });

  return result;
};

const getTechnologyCategoriesFromDB = async () => {
  const result = await prisma.technologyCategory.findMany({
    include: {
      Technology: true,
    },
  });

  return result;
};

const updateTechnologyCategoryIntoDB = async (
  id: string,
  payload: TechnologyCategory,
) => {
  const result = await prisma.technologyCategory.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteTechnologyCategoryFromDB = async (id: string) => {
  const result = await prisma.technologyCategory.delete({
    where: {
      id,
    },
  });

  return result;
};

export const TechnologyCategoryServices = {
  createTechnologyCategoryIntoDB,
  getTechnologyCategoryFromDB,
  getTechnologyCategoriesFromDB,
  updateTechnologyCategoryIntoDB,
  deleteTechnologyCategoryFromDB,
};
