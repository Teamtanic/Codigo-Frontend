import { api } from '../api'
import {
  TransactionCreateRequest,
  TransactionResponse,
  TransactionResponsePaginate
} from './type'

export const getAllTransactions = (page: number, size?: number) =>
  api.get<TransactionResponsePaginate>('/transacoes', {
    params: { page, size }
  })

export const createTransaction = (transactionData: TransactionCreateRequest) =>
  api.post<TransactionResponse>('/transacoes', transactionData)
