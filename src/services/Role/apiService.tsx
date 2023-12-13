import { api } from '../api'
import {
  RoleCreateRequest,
  RoleResponse,
  RoleResponsePaginate,
  RoleUpdateRequest
} from './types'

export const getAllRoles = (page: number, size?: number) =>
  api.get<RoleResponsePaginate>('/cargos', { params: { page, size } })

export const createRole = (roleData: RoleCreateRequest) =>
  api.post<RoleResponse>('/cargos', roleData)

export const searchRole = (name: string, page = 0, size = 3) =>
  api.get<RoleResponsePaginate>('/cargos/pesquisa', {
    params: { name, page, size }
  })

export const editRole = (roleData: RoleUpdateRequest, id: string) =>
  api.patch<RoleResponse>(`/cargos/${id}`, roleData)

export const deleteRole = (id: string) => api.delete(`/cargos/${id}`)

export const getRoleById = (id: string) =>
  api.get<RoleResponse>(`/cargos/${id}`)
