import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectReviewService } from './ProjectReview.service';

const createProjectReview = catchAsync(async (req, res) => {
  const result = await ProjectReviewService.createProjectReview(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project Review created successfully',
    data: result,
  });
});

export const ProjectReviewController = {
  createProjectReview,
};