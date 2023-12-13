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

// métodos de autenticação
export const authenticateUser = (authData: UserAuthenticationRequest) =>
  api.post<any>('/auth/login', authData)

export const requestUserByEmail = (emailData: UserEmailRequest) =>
  api.post<UserResponse>('/auth/request-email', emailData)

export const requestPasswordReset = (emailData: UserEmailRequest) =>
  api.post<any>('/auth/recuperar-senha', emailData)

export const resetPassword = (
  passwordData: UserPasswordRequest,
  token: string
) => api.post<any>(`/auth/reset-password?token=${token}`, passwordData)
