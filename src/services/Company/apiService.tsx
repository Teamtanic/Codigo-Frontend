import { api } from '../api'
import {
  CompanyCreateRequest,
  CompanyResponse,
  CompanyResponsePaginate
} from './types'

export const getAllCompanies = (page: number, size?: number) =>
  api.get<CompanyResponsePaginate>('/empresas', { params: { page, size } })

export const getAllCustomers = () =>
  api.get<CompanyResponsePaginate>('/empresas?relacao=clientes')

export const getAllSuppliers = () =>
  api.get<CompanyResponsePaginate>('/empresas?relacao=fornecedores')

export const createCompany = (companyData: CompanyCreateRequest) =>
  api.post<CompanyResponse>('/empresas', companyData)
