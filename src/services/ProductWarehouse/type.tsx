import { CompanyRelationshipResponse } from '../CompanyRelationship/types'

export interface ProductTransactionRequest {
  productId: string
  quantity: number
}

export interface ProductWarehouseCreateRequest {
  product: string
  quantity: number
  companyRelationship: string
  supplierPrice?: number
}

export interface ProductWarehouseUpdateRequest {
  product?: string
  quantity?: number
}

export interface ProductSupplierInfoResponse {
  product: string
  supplierPrice: number
  id: SupplierProductKey
}

export interface ProductWarehouseResponse {
  id: string
  product: string
  quantity: number
  supplierProducts: ProductSupplierInfoResponse[]
}

export interface ProductWarehouseResponsePaginate
  extends Paginate<ProductWarehouseResponse> {}

export interface SupplierProduct {
  id: SupplierProductKey
  companyRelationship: CompanyRelationshipResponse
  product: ProductWarehouseResponse
  price: number
}

export interface SupplierProductKey {
  companyRelationshipId: string
  productWarehouseId: string
}
