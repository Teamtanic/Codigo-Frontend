import { api } from '../api'
import {
  BankAccountCreateRequest,
  BankAccountResponse,
  BankAccountResponsePaginate,
  BankAccountUpdateRequest
} from './types'

export const getAllBankAccounts = (page: number, size?: number) =>
  api.get<BankAccountResponsePaginate>('/bancos', { params: { page, size } })

export const createBankAccount = (bankAccountData: BankAccountCreateRequest) =>
  api.post<BankAccountResponse>('/bancos', bankAccountData)

export const searchBankAccount = (name: string, page = 0, size = 3) =>
  api.get<BankAccountResponsePaginate>('/bancos/pesquisa', {
    params: { name, page, size }
  })

export const editBankAccount = (
  bankAccountData: BankAccountUpdateRequest,
  id: string
) => api.patch<BankAccountResponse>(`/bancos/${id}`, bankAccountData)

export const deleteBankAccount = (id: string) => api.delete(`/bancos/${id}`)

export const getBankAccountById = (id: string) =>
  api.get<BankAccountResponse>(`/bancos/${id}`)
