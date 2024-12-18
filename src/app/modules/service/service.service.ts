import { ServiceGallery } from '@prisma/client';
import prisma from '../../../db/db.config';

const createServiceIntoDB = async (payload: any) => {
  const result = await prisma.service.create({
    data: {
      name: payload.name,
      logo: payload.logo,
      description: payload.description,
      videoUrl: payload.videoUrl,
      serviceGallery: {
        create: payload.serviceGallery.map(
          (serviceGallery: ServiceGallery) => ({
            image: serviceGallery.image,
          }),
        ),
      },
    },
  });

  return result;
};

const getServicesFromDB = async () => {
  const result = await prisma.service.findMany({
    include: {
      serviceGallery: true,
    },
  });

  return result;
};

const getServiceByIdFromDB = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
    include: {
      serviceGallery: true,
    },
  });

  return result;
};

const updateServiceIntoDB = async (id: string, payload: any) => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: {
      name: payload.name,
      logo: payload.logo,
      description: payload.description,
      videoUrl: payload.videoUrl,
      serviceGallery: {
        deleteMany: {},
        create: payload.serviceGallery.map(
          (serviceGallery: ServiceGallery) => ({
            image: serviceGallery.image,
          }),
        ),
      },
    },
  });

  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getServicesFromDB,
  getServiceByIdFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
};
