import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AboutServices } from './about.service';

const createAbout = catchAsync(async (req, res) => {
  const result = await AboutServices.createAboutIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'About created successfully',
    data: result,
  });
});

const getAbout = catchAsync(async (req, res) => {
  const result = await AboutServices.getAboutFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
  });
});

const updateAbout = catchAsync(async (req, res) => {
  const result = await AboutServices.updateAboutIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About updated successfully',
    data: result,
  });
});

export const AboutController = {
  createAbout,
  getAbout,
  updateAbout,
};
