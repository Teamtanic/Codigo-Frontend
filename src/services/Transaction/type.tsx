import { BankAccountResponse } from '../BankAccount/types'
import { ProductTransactionRequest } from '../ProductWarehouse/type'
import { ProjectResponse } from '../Project/type'

export interface TransactionCreateRequest {
  description: string
  amount: number
  type: TransactionType
  paymentMethod: string
  installments?: number
  qtyInstallments?: number
  dtCashflow: string
  projectId?: string
  bankAccountId?: string
  productsWarehouse?: ProductTransactionRequest[]
}

export interface TransactionResponse {
  id: string
  description: string
  amount: number
  type: TransactionType
  paymentMethod: string
  installments: number
  qtyInstallments: number
  dtCashflow: Date
  project: ProjectResponse
  bankAccount: BankAccountResponse
  products: ProductTransactionRequest[]
}

export interface TransactionResponsePaginate
  extends Paginate<TransactionResponse> {}

export enum TransactionType {
  SAIDA = 'SAIDA',
  ENTRADA = 'ENTRADA'
}
