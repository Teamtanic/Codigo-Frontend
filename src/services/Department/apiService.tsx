import { api } from '../api'
import {
  DepartmentCreateRequest,
  DepartmentResponse,
  DepartmentResponsePaginate,
  DepartmentUpdateRequest
} from './types'

export const getAllDepartments = () =>
  api.get<DepartmentResponsePaginate>('/departamentos')

export const createDepartment = (departmentData: DepartmentCreateRequest) =>
  api.post<DepartmentResponse>('/departamentos', departmentData)

export const searchDepartment = (name: string, page = 0, size = 3) =>
  api.get<DepartmentResponsePaginate>('/departamentos/pesquisa', {
    params: { name, page, size }
  })

export const editDepartment = (
  departmentData: DepartmentUpdateRequest,
  id: string
) => api.patch<DepartmentResponse>(`/departamentos/${id}`, departmentData)

export const deleteDepartment = (id: string) =>
  api.delete(`/departamentos/${id}`)

export const getDepartmentById = (id: string) =>
  api.get<DepartmentResponse>(`/departamentos/${id}`)
