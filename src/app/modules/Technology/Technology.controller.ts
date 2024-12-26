import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TechnologyServices } from './Technology.service';

const createTechnology = catchAsync(async (req, res) => {
  const result = await TechnologyServices.createTechnologyIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Technology created successfully',
    data: result,
  });
});

const getTechnologies = catchAsync(async (req, res) => {
  const result = await TechnologyServices.getTechnologiesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technologies fetched successfully',
    data: result,
  });
});

const getTechnologyById = catchAsync(async (req, res) => {
  const result = await TechnologyServices.getTechnologyByIdFromDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology fetched successfully',
    data: result,
  });
});

const updateTechnologyById = catchAsync(async (req, res) => {
  const result = await TechnologyServices.updateTechnologyByIdInDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology updated successfully',
    data: result,
  });
});

const deleteTechnologyById = catchAsync(async (req, res) => {
  await TechnologyServices.deleteTechnologyByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Technology deleted successfully',
  });
});

export const TechnologyController = {
  createTechnology,
  getTechnologies,
  getTechnologyById,
  updateTechnologyById,
  deleteTechnologyById,
};
