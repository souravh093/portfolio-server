import { Blog } from '@prisma/client';
import prisma from '../../../db/db.config';

const createBlogIntoDB = async (payload: Blog) => {
  const result = await prisma.blog.create({
    data: payload,
  });

  return result;
};

const getBlogsFromDB = async () => {
  const result = await prisma.blog.findMany();

  return result;
};

const getBlogByIdFromDB = async (id: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateBlogByIdInDB = async (id: string, payload: Blog) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteBlogByIdFromDB = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getBlogsFromDB,
  getBlogByIdFromDB,
  updateBlogByIdInDB,
  deleteBlogByIdFromDB,
};
