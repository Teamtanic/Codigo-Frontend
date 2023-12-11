import { UserResponse } from '../User/types'

enum Permission {
  CAN_VIEW,
  CAN_WRITE
}

export interface UserRoleDTO {
  userId: string
  role: string
}

export interface UserRoleResponse {
  user: UserResponse
  role: string
}

export interface RoleCreateRequest {
  name: string
  permissions?: Permission[]
}

export interface RoleResponse {
  id: string
  name: string
  permissions: Permission[]
}

export interface RoleResponsePaginate extends Paginate<RoleResponse> {}
