import { SocialMedia } from '@prisma/client';
import prisma from '../../../db/db.config';

const createSocialMediaIntoDB = async (payload: SocialMedia) => {
  const result = await prisma.socialMedia.create({
    data: payload,
  });

  return result;
};

const getSocialMediaFromDB = async () => {
  const result = await prisma.socialMedia.findMany();

  return result;
};

const updateSocialMediaFromDB = async (id: string, payload: SocialMedia) => {
  const result = await prisma.socialMedia.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSocialMediaFromDB = async (id: string) => {
  const result = await prisma.socialMedia.delete({
    where: {
      id,
    },
  });

  return result;
};

export const socialMediaServices = {
  createSocialMediaIntoDB,
  getSocialMediaFromDB,
  updateSocialMediaFromDB,
  deleteSocialMediaFromDB,
};
