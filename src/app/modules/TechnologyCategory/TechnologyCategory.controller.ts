import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TechnologyCategoryServices } from './TechnologyCategory.service';

const createTechnologyCategory = catchAsync(async (req, res) => {
  const result =
    await TechnologyCategoryServices.createTechnologyCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Technology Category created successfully',
    data: result,
  });
});

const getTechnologyCategory = catchAsync(async (req, res) => {
  const result = await TechnologyCategoryServices.getTechnologyCategoryFromDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology Category fetched successfully',
    data: result,
  });
});

const getTechnologyCategories = catchAsync(async (req, res) => {
  const result =
    await TechnologyCategoryServices.getTechnologyCategoriesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology Categories fetched successfully',
    data: result,
  });
});

const updateTechnologyCategory = catchAsync(async (req, res) => {
  const result =
    await TechnologyCategoryServices.updateTechnologyCategoryIntoDB(
      req.params.id,
      req.body,
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology Category updated successfully',
    data: result,
  });
});

const deleteTechnologyCategory = catchAsync(async (req, res) => {
  const result =
    await TechnologyCategoryServices.deleteTechnologyCategoryFromDB(
      req.params.id,
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Technology Category deleted successfully',
    data: result,
  });
});

export const TechnologyCategoryController = {
  createTechnologyCategory,
  getTechnologyCategory,
  getTechnologyCategories,
  updateTechnologyCategory,
  deleteTechnologyCategory,
};
