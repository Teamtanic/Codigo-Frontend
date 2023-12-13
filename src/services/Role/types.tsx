import { UserResponse } from '../User/types'

export enum Permission {
  CAN_VIEW = 'CAN_VIEW',
  CAN_WRITE = 'CAN_WRITE'
}

export interface UserRoleCreateRequest {
  userId: string
  role: string
}

export interface UserRoleResponse {
  user: UserResponse
  role: string
}

export interface RoleCreateRequest {
  name: string
  rolePermissions: RolePermission[]
}

export interface RolePermission {
  departmentId: string
  permissions?: Permission[]
}

export interface RoleUpdateRequest {
  name?: string
  rolePermissions?: RolePermission[]
}

export interface RoleResponse {
  id: string
  name: string
  permissions: Permission[]
}

export interface RoleResponsePaginate extends Paginate<RoleResponse> {}
