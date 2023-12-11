import { api } from '../api'
import {
  BankAccountCreateRequest,
  BankAccountResponse,
  BankAccountResponsePaginate
} from './types'

export const getAllBankAccounts = (page: number, size?: number) =>
  api.get<BankAccountResponsePaginate>('/bancos', { params: { page, size } })

export const createBankAccount = (bankAccountData: BankAccountCreateRequest) =>
  api.post<BankAccountResponse>('/bancos', bankAccountData)

export const searchBankAccount = (name: string, page = 0, size = 3) =>
  api.get<BankAccountResponsePaginate>('/bancos/pesquisa', {
    params: { name, page, size }
  })
