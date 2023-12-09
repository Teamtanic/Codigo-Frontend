import { api } from '../api'
import { DepartmentCreateRequest, DepartmentResponse } from './types'

export const getAllDepartments = () =>
  api.get<DepartmentResponse>('/departamentos')

export const createDepartment = (departmentData: DepartmentCreateRequest) =>
  api.post<DepartmentResponse>('/departamentos', departmentData)
