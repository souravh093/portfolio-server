import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FaqServices } from './faq.service';

const createFaq = catchAsync(async (req, res) => {
  const result = await FaqServices.createFaqIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Faq created successfully',
    data: result,
  });
});

const getFaqs = catchAsync(async (req, res) => {
  const result = await FaqServices.getFaqsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faqs fetched successfully',
    data: result,
  });
});

const updateFaq = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FaqServices.updateFaqFromDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faq updated successfully',
    data: result,
  });
});

const deleteFaq = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FaqServices.deleteFaqFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faq deleted successfully',
    data: result,
  });
});

export const FaqController = {
  createFaq,
  getFaqs,
  updateFaq,
  deleteFaq,
};
