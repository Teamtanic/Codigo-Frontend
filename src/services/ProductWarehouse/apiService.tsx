import { api } from "../api";
import {
  ProductWarehouseCreateRequest,
  ProductWarehouseResponse,
  ProductWarehouseResponsePaginate,
  ProductWarehouseUpdateRequest,
} from "./type";

export const getAllProducts = (page: number, size?: number) =>
  api.get<ProductWarehouseResponsePaginate>("/produtos", {
    params: { page, size },
  });

export const getAllCompanyProducts = (
  idCompany: string,
  page: number,
  size?: number
) =>
  api.get<ProductWarehouseResponsePaginate>(`/empresas/${idCompany}/produtos`, {
    params: { page, size },
  });

export const createProduct = (productData: ProductWarehouseCreateRequest) =>
  api.post<ProductWarehouseResponse>("/produtos", productData);

export const editProduct = (
  productData: ProductWarehouseUpdateRequest,
  id: string
) => api.patch<ProductWarehouseResponse>(`/produtos/${id}`, productData);

export const deleteProduct = (id: string) => api.delete(`/produtos/${id}`);

export const getProductById = (id: string) =>
  api.get<ProductWarehouseResponse>(`/produtos/${id}`);

export const searchProduct = (product: string, page = 0, size = 3) =>
  api.get<ProductWarehouseResponsePaginate>("/produtos/pesquisa", {
    params: { product, page, size },
  });
