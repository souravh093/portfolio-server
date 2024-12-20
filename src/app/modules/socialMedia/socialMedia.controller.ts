import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { socialMediaServices } from './socialMedia.service';

const createSocialMedia = catchAsync(async (req, res) => {
  const result = await socialMediaServices.createSocialMediaIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Social Media created successfully',
    data: result,
  });
});

const getSocialMedia = catchAsync(async (req, res) => {
  const result = await socialMediaServices.getSocialMediaFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Social Media fetched successfully',
    data: result,
  });
});

const updateSocialMedia = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await socialMediaServices.updateSocialMediaFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Social Media updated successfully',
    data: result,
  });
});

const deleteSocialMedia = catchAsync(async (req, res) => {
  const { id } = req.params;
  await socialMediaServices.deleteSocialMediaFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Social Media deleted successfully',
  });
});

export const socialMediaController = {
  createSocialMedia,
  getSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
};
