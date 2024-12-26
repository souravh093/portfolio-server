import { ProjectUsedTechnology } from '@prisma/client';
import prisma from '../../../db/db.config';

const createProjectIntoDB = async (payload: any) => {
  const result = await prisma.project.create({
    data: {
      name: payload.name,
      description: payload.description,
      projectCategory: payload.projectCategory,
      duration: payload.duration,
      githubClientUrl: payload.githubClientUrl,
      githubServerUrl: payload.githubServerUrl,
      image: payload.image,
      projectUrl: payload.projectUrl,
      projectUsedTechnology: {
        create: payload.projectUsedTechnology.map(
          (technology: ProjectUsedTechnology) => ({
            technologyId: technology.technologyId,
          }),
        ),
      },
    },
  });

  return result;
};

const getProjectsFromDB = async () => {
  const result = await prisma.project.findMany({
    include: {
      projectUsedTechnology: {
        include: {
          technology: true,
        }
      },
    },
  });

  return result;
};

const getProjectByIdFromDB = async (id: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      projectUsedTechnology: {
        include: {
          technology: true,
        }
      },
    },
  });

  return result;
};

const updateProjectIntoDB = async (id: string, payload: any) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: {
      name: payload.name,
      description: payload.description,
      projectCategory: payload.projectCategory,
      duration: payload.duration,
      githubClientUrl: payload.githubClientUrl,
      githubServerUrl: payload.githubServerUrl,
      image: payload.image,
      projectUrl: payload.projectUrl,
      projectUsedTechnology: {
        deleteMany: {},
        create: payload.projectUsedTechnology.map(
          (technology: ProjectUsedTechnology) => ({
            technologyId: technology,
          }),
        ),
      },
    },
  });

  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getProjectsFromDB,
  getProjectByIdFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
