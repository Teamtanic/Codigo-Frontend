import { api } from '../api'
import {
  CompanyCreateRequest,
  CompanyResponse,
  CompanyResponsePaginate,
  CompanyUpdateRequest
} from './types'

export const getAllCompanies = (page: number, size?: number) =>
  api.get<CompanyResponsePaginate>('/empresas', { params: { page, size } })

export const getAllCustomers = () =>
  api.get<CompanyResponsePaginate>('/empresas?relacao=clientes')

export const getAllSuppliers = () =>
  api.get<CompanyResponsePaginate>('/empresas?relacao=fornecedores')

export const createCompany = (companyData: CompanyCreateRequest) =>
  api.post<CompanyResponse>('/empresas', companyData)

export const editCompany = (companyData: CompanyUpdateRequest, id: string) =>
  api.patch<CompanyResponse>(`/empresas/${id}`, companyData)

export const deleteCompany = (id: string) => api.delete(`/empresas/${id}`)

export const getCompanyById = (id: string) =>
  api.get<CompanyResponse>(`/empresas/${id}`)

export const searchCompany = (name: string, page = 0, size = 3) =>
  api.get<CompanyResponsePaginate>('/empresas/pesquisa', {
    params: { name, page, size }
  })

export const searchCompanyCustomer = (
  name: string,
  page = 0,
  size = 3,
  type = 'cliente'
) =>
  api.get<CompanyResponsePaginate>('/empresas/pesquisa', {
    params: { name, page, size, type }
  })

export const searchCompanySupplier = (
  name: string,
  page = 0,
  size = 3,
  type = 'fornecedor'
) =>
  api.get<CompanyResponsePaginate>('/empresas/pesquisa', {
    params: { name, page, size, type }
  })
