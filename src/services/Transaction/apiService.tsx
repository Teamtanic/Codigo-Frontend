import { api } from '../api'
import { TransactionCreateRequest, TransactionResponse } from './type'

export const getAllTransactions = () =>
  api.get<TransactionResponse[]>('/transacoes')

export const createTransaction = (transactionData: TransactionCreateRequest) =>
  api.post<TransactionResponse>('/transacoes', transactionData)
