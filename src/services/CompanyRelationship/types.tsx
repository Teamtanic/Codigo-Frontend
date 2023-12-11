import { CompanyResponse } from '../Company/types'

export interface CompanyRelationshipProjectResponse {
  id: string
  businessRelationship: BusinessRelationshipType
  company: CompanyResponse
}

export interface CompanyRelationshipResponse {
  id: string
  active: boolean
  businessRelationship: BusinessRelationshipType
  company: CompanyResponse
}

export enum BusinessRelationshipType {
  CLIENTE = 'CLIENTE',
  FORNECEDOR = 'FORNECEDOR'
}
