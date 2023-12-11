import axios from 'axios'
import { api } from '../api'
import {
  UserAuthenticationRequest,
  UserEmailRequest,
  UserPasswordRequest,
  UserRegisterRequest,
  UserUpdateRequest,
  UserResponse,
  UserResponsePaginate
} from './types'

export const getAllUsers = () => api.get<UserResponsePaginate>('/usuarios')

export const getUserById = (userId: number) =>
  api.get<UserResponse>(`/usuarios/${userId}`)

export const createUser = (userData: UserRegisterRequest) =>
  api.post<UserResponse>('/auth/registro', userData)

export const updateUser = (userId: number, userData: UserUpdateRequest) =>
  api.patch<UserResponse>(`/usuarios/${userId}`, userData)

export const deleteUser = (userId: number) => api.delete(`/usuarios/${userId}`)

const apiLogin = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json'
  }
})

// métodos de autenticação
export const authenticateUser = (authData: UserAuthenticationRequest) =>
  apiLogin.post<any>('/auth/login', authData)

export const requestUserByEmail = (emailData: UserEmailRequest) =>
  api.post<UserResponse>('/auth/request-email', emailData)

export const requestPasswordReset = (passwordData: UserPasswordRequest) =>
  api.post<any>('/auth/request-password-reset', passwordData)
