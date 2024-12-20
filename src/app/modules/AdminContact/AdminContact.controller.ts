import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminContactService } from './AdminContact.service';

const createAdminContact = catchAsync(async (req, res) => {
  const result = await AdminContactService.createAdminContactIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Admin Contact created successfully',
    data: result,
  });
});

const getAdminContact = catchAsync(async (req, res) => {
  const result = await AdminContactService.getAdminContactFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Admin Contact fetched successfully',
    data: result,
  });
});

const updateAdminContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminContactService.updateAdminContactIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Admin Contact updated successfully',
    data: result,
  });
});

export const AdminContactController = {
  createAdminContact,
  getAdminContact,
  updateAdminContact,
};
