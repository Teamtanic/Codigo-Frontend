import { UserResponse } from '../User/types'

export interface UserRoleDTO {
  userId: string
  role: string
}

export interface UserRoleResponse {
  user: UserResponse
  role: string
}
