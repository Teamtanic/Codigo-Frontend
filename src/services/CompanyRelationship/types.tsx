import { CompanyResponse } from '../Company/types'

export interface CompanyRelationshipProjectResponse {
  id: string
  businessRelationshipType: BusinessRelationshipType
  company: CompanyResponse
}

export interface CompanyRelationshipResponse {
  id: string
  active: boolean
  businessRelationshipType: BusinessRelationshipType
  company: CompanyResponse
}

export enum BusinessRelationshipType {
  CLIENTE,
  FORNECEDOR
}
