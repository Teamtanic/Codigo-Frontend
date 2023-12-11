import { api } from '../api'
import {
  ProductWarehouseCreateRequest,
  ProductWarehouseResponse,
  ProductWarehouseResponsePaginate
} from './type'

export const getAllProducts = (page: number, size?: number) =>
  api.get<ProductWarehouseResponsePaginate>('/produtos', {
    params: { page, size }
  })

export const createProduct = (productData: ProductWarehouseCreateRequest) =>
  api.post<ProductWarehouseResponse>('/produtos', productData)
