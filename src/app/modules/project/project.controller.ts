import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjectsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjectByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.updateProjectIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  await ProjectServices.deleteProjectFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Project deleted successfully',
  });
});

export const ProjectController = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
