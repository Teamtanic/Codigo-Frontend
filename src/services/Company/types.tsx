import {
  BusinessRelationshipType,
  CompanyRelationshipResponse
} from '../CompanyRelationship/types'
import { ContactCreateRequest } from '../Contact/types'

export interface CompanyCreateRequest {
  name: string
  cpf?: string
  cnpj?: string
  email?: string
  telephone?: string
  cell_phone?: string
  businessRelationshipType: BusinessRelationshipType[]
}

export interface CompanyUpdateRequest {
  name: string
  cpf?: string
  cnpj?: string
}

export interface CompanyResponse {
  id: string
  name: string
  cpf?: string
  cnpj?: string
  companyRelationships: CompanyRelationshipResponse[]
  contact: ContactCreateRequest[]
}

export interface CompanyResponsePaginate extends Paginate<CompanyResponse> {}
