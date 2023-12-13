import { CompanyRelationshipProjectResponse } from '../CompanyRelationship/types'
import { OfferingResponse } from '../Offering/types'
import { UserRoleResponse } from '../Role/types'

export interface ProjectCreateRequest {
  title: string
  description?: string
  companyRelationshipIds: string[]
  offeringIds: string[]
  users: UserRoleResponse[]
}

export interface ProjectUpdateRequest {
  description?: string
  title?: string
  active?: boolean
  companyRelationshipIds?: string[]
  users?: UserRoleResponse[]
}

export interface ProjectResponse {
  id: string
  title: string
  description: string
  companyRelationships: CompanyRelationshipProjectResponse[]
  offerings: Set<OfferingResponse>
  users: UserRoleResponse[]
  status: boolean
}

export interface ProjectResponsePaginate extends Paginate<ProjectResponse> {}
