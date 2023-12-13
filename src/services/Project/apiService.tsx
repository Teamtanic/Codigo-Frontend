import { api } from '../api'
import {
  ProjectCreateRequest,
  ProjectResponse,
  ProjectResponsePaginate,
  ProjectUpdateRequest
} from './type'

export const getAllProjects = (page: number, size?: number) =>
  api.get<ProjectResponsePaginate>('/projetos', { params: { page, size } })

export const createProject = (projectData: ProjectCreateRequest) =>
  api.post<ProjectResponse>('/projetos', projectData)

export const editProject = (projectData: ProjectUpdateRequest, id: string) =>
  api.patch<ProjectResponse>(`/projetos/${id}`, projectData)

export const deleteProject = (id: string) => api.delete(`/projetos/${id}`)

export const getProjectById = (id: string) =>
  api.get<ProjectResponse>(`/projetos/${id}`)
