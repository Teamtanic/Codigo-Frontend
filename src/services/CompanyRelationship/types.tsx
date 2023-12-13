import { CompanyResponse } from '../Company/types'

export interface CompanyRelationshipProjectResponse {
  idCompanyRelationship: string
  businessRelationship: BusinessRelationshipType
  company: CompanyResponse
}

export interface CompanyRelationshipResponse {
  idCompanyRelationship: string
  active: boolean
  businessRelationship: BusinessRelationshipType
  company: CompanyResponse
}

export enum BusinessRelationshipType {
  CLIENTE = 'CLIENTE',
  FORNECEDOR = 'FORNECEDOR'
}
