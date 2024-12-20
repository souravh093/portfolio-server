import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ContactService } from './contact.service';

const createContact = catchAsync(async (req, res) => {
  const result = await ContactService.createContact(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Contact created successfully',
    data: result,
  });
});

const getContact = catchAsync(async (req, res) => {
  const result = await ContactService.getContact();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact fetched successfully',
    data: result,
  });
});

const getContactById = catchAsync(async (req, res) => {
  const result = await ContactService.getContactById(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact fetched successfully',
    data: result,
  });
});

const updateContact = catchAsync(async (req, res) => {
  const result = await ContactService.updateContact(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact updated successfully',
    data: result,
  });
});

const deleteContact = catchAsync(async (req, res) => {
  await ContactService.deleteContact(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact deleted successfully',
  });
});

export const ContactController = {
  createContact,
  getContact,
  getContactById,
  updateContact,
  deleteContact,
};
