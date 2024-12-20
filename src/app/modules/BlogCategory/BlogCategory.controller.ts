import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogCategoryServices } from "./BlogCategory.service";

const createBlogCategory = catchAsync(async (req, res) => {
    const result = await BlogCategoryServices.createBlogCategoryIntoDB(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Blog Category created successfully',
        data: result,
    })
})

const getBlogCategory = catchAsync(async (req, res) => {
    const result = await BlogCategoryServices.getBlogCategoryFromDB();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Blog Category fetched successfully',
        data: result,
    })
})

const updateBlogCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogCategoryServices.updateBlogCategoryFromDB(id, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Blog Category updated successfully',
        data: result,
    })
})

const deleteBlogCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogCategoryServices.deleteBlogCategoryFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Blog Category deleted successfully',
        data: result,
    })
})

export const BlogCategoryController = {
    createBlogCategory,
    getBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
}