import { UserResponse } from '../User/types'

export interface CourseCreateRequest {
  name: string
}

export interface CourseResponse {
  id: string
  name: string
}

export interface CourseResponsePaginate extends Paginate<CourseResponse> {}

export interface CourseWithUsersResponse {
  id: string
  name: string
  users: UserResponse[]
}
