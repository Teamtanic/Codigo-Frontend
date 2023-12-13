export interface DepartmentCreateRequest {
  name: string
}

export interface DepartmentUpdateRequest {
  name?: string
}

export interface DepartmentResponse {
  id: string
  name: string
}

export interface DepartmentResponsePaginate
  extends Paginate<DepartmentResponse> {}
