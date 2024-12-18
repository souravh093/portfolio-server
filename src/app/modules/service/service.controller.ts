import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceServices } from './service.service';

const createService = catchAsync(async (req, res) => {
  const result = await ServiceServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Service created successfully',
    data: result,
  });
});

const getServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.getServicesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services fetched successfully',
    data: result,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const result = await ServiceServices.getServiceByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service fetched successfully',
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const result = await ServiceServices.updateServiceIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  await ServiceServices.deleteServiceFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Service deleted successfully',
  });
});

export const ServiceController = {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};
