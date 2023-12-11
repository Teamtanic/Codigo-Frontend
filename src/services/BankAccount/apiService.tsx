import { api } from '../api'
import {
  BankAccountCreateRequest,
  BankAccountResponse,
  BankAccountResponsePaginate
} from './types'

export const getAllBankAccounts = () =>
  api.get<BankAccountResponsePaginate>('/bancos')

export const createBankAccount = (bankAccountData: BankAccountCreateRequest) =>
  api.post<BankAccountResponse>('/bancos', bankAccountData)
