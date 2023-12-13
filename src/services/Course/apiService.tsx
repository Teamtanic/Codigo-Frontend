import { api } from '../api'
import {
  CourseCreateRequest,
  CourseResponse,
  CourseResponsePaginate,
  CourseUpdateRequest
} from './types'

export const getAllCourses = () => api.get<CourseResponsePaginate>('/cursos')

export const createCourse = (courseData: CourseCreateRequest) =>
  api.post<CourseResponse>('/cursos', courseData)

export const editCourse = (courseData: CourseUpdateRequest, id: string) =>
  api.patch<CourseResponse>(`/cursos/${id}`, courseData)

export const deleteCourse = (id: string) => api.delete(`/cursos/${id}`)

export const getCourseById = (id: string) =>
  api.get<CourseResponse>(`/cursos/${id}`)

export const searchCourse = (name: string, page = 0, size = 3) =>
  api.get<CourseResponsePaginate>('/cursos/pesquisa', {
    params: { name, page, size }
  })
