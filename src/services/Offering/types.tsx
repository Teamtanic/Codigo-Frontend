export interface OfferingCreateRequest {
  description: string
  type: OfferingType
}

export interface OfferingResponse {
  id: string
  description: string
  type: OfferingType
}

export interface OfferingResponsePaginate extends Paginate<OfferingResponse> {}

export enum OfferingType {
  SERVICO = 'Serviço',
  PRODUTO = 'Produto'
}
