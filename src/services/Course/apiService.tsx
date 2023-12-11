import { api } from '../api'
import {
  CourseCreateRequest,
  CourseResponse,
  CourseResponsePaginate
} from './types'

export const getAllCourses = () => api.get<CourseResponsePaginate>('/cursos')

export const createCourse = (courseData: CourseCreateRequest) =>
  api.post<CourseResponse>('/cursos', courseData)
