import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceServices } from './experience.service';

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.createExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const getExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getExperienceFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience fetched successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.updateExperienceIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.deleteExperienceFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
};
