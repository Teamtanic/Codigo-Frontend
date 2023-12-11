import { CompanyRelationshipProjectResponse } from '../CompanyRelationship/types'
import { OfferingResponse } from '../Offering/types'
import { UserRoleDTO, UserRoleResponse } from '../Role/types'

export interface ProjectCreateRequest {
  title: string
  description?: string
  companyRelationshipIds: string[]
  offeringIds: string[]
  users: UserRoleDTO[]
}

export interface ProjectUpdateRequest {
  description?: string
  title?: string
  active?: boolean
  companyRelationshipIds?: string[]
  users?: UserRoleDTO[]
}

export interface ProjectResponse {
  id: string
  title: string
  description: string
  companyRelationship: CompanyRelationshipProjectResponse
  offerings: Set<OfferingResponse>
  users: UserRoleResponse[]
  status: boolean
}

export interface ProjectResponsePaginate extends Paginate<ProjectResponse> {}
