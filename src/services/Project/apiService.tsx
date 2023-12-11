import { api } from '../api'
import {
  ProjectCreateRequest,
  ProjectResponse,
  ProjectResponsePaginate
} from './type'

export const getAllProjects = () =>
  api.get<ProjectResponsePaginate>('/projetos')

export const createProject = (projectData: ProjectCreateRequest) =>
  api.post<ProjectResponse>('/projetos', projectData)
