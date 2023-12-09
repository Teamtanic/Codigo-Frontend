import { api } from '../api'
import { CourseCreateRequest, CourseResponse } from './types'

export const getAllCourses = () => api.get<CourseResponse>('/cursos')

export const createCourse = (courseData: CourseCreateRequest) =>
  api.post<CourseResponse>('/cursos', courseData)
