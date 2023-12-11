import { api } from '../api'
import {
  ProductWarehouseCreateRequest,
  ProductWarehouseResponse,
  ProductWarehouseResponsePaginate
} from './type'

export const getAllProducts = () =>
  api.get<ProductWarehouseResponsePaginate>('/produtos')

export const createProduct = (productData: ProductWarehouseCreateRequest) =>
  api.post<ProductWarehouseResponse>('/produtos', productData)
