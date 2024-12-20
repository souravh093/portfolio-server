import { ProjectReview } from '@prisma/client';
import prisma from '../../../db/db.config';

const createProjectReview = async (payload: ProjectReview) => {
  const result = await prisma.projectReview.create({
    data: payload,
  });

  return result;
};

export const ProjectReviewService = {
  createProjectReview,
};
