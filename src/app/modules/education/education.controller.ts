import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EducationServices } from './education.service';

const createEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.createEducationIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const getEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.getEducationFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education fetched successfully',
    data: result,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.updateEducationIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.deleteEducationFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education deleted successfully',
    data: result,
  });
});

export const EducationController = {
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
};
