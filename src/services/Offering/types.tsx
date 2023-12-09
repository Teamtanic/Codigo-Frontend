export interface OfferingCreateRequest {
  description: string
  type: OfferingType
}

export interface OfferingResponse {
  id: string
  description: string
  type: OfferingType
}

export enum OfferingType {
  SERVICO,
  PRODUTO
}
