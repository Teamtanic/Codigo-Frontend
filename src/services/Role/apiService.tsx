import { api } from '../api'
import { RoleResponsePaginate } from './types'

export const getAllRoles = (page: number, size?: number) =>
  api.get<RoleResponsePaginate>('/cargos', { params: { page, size } })
