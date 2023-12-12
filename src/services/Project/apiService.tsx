import { api } from '../api'
import {
  ProjectCreateRequest,
  ProjectResponse,
  ProjectResponsePaginate
} from './type'

export const getAllProjects = (page: number, size?: number) =>
  api.get<ProjectResponsePaginate>('/projetos', { params: { page, size } })

export const createProject = (projectData: ProjectCreateRequest) =>
  api.post<ProjectResponse>('/projetos', projectData)
