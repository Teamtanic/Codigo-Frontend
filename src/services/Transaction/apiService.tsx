import { api } from '../api'
import {
  TransactionCreateRequest,
  TransactionResponse,
  TransactionResponsePaginate
} from './type'

export const getAllTransactions = () =>
  api.get<TransactionResponsePaginate>('/transacoes')

export const createTransaction = (transactionData: TransactionCreateRequest) =>
  api.post<TransactionResponse>('/transacoes', transactionData)
