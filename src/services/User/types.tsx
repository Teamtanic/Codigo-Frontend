import { ContactResponse } from '../Contact/types'
import { CourseResponse } from '../Course/types'
import { DepartmentResponse } from '../Department/types'
import { RoleResponse } from '../Role/types'

export interface UserAuthenticationRequest {
  login: string
  password: string
}

export interface UserEmailRequest {
  email: string
}

export interface UserPasswordRequest {
  password: string
}

export interface UserRegisterRequest {
  name: string
  login: string
  prontuary: string
  password: string
  email: string
  telephone: string
  cell_phone: string
}

export interface UserUpdateRequest {
  name?: string
  password?: string
  prontuary?: string
  courseId?: number
  roleId?: string
  departmentId?: string
}

export interface UserResponse {
  id: string
  name: string
  prontuary: string
  course: CourseResponse
  department: DepartmentResponse
  role: RoleResponse
  contact: ContactResponse
  status: boolean
}

export interface UserResponsePaginate extends Paginate<UserResponse> {}
