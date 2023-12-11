import { api } from '../api'
import {
  DepartmentCreateRequest,
  DepartmentResponse,
  DepartmentResponsePaginate
} from './types'

export const getAllDepartments = () =>
  api.get<DepartmentResponsePaginate>('/departamentos')

export const createDepartment = (departmentData: DepartmentCreateRequest) =>
  api.post<DepartmentResponse>('/departamentos', departmentData)
