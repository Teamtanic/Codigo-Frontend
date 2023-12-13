import { api } from '../api'
import {
  OfferingCreateRequest,
  OfferingResponse,
  OfferingResponsePaginate,
  OfferingUpdateRequest
} from './types'

export const getAllOffers = () => api.get<OfferingResponsePaginate>('/ofertas')

export const createOffer = (offerData: OfferingCreateRequest) =>
  api.post<OfferingResponse>('/ofertas', offerData)

export const searchOffer = (description: string, page = 0, size = 3) =>
  api.get<OfferingResponsePaginate>('/ofertas/pesquisa', {
    params: { description, page, size }
  })

export const editOffer = (offerData: OfferingUpdateRequest, id: string) =>
  api.patch<OfferingResponse>(`/ofertas/${id}`, offerData)

export const deleteOffer = (id: string) => api.delete(`/ofertas/${id}`)

export const getOfferById = (id: string) =>
  api.get<OfferingResponse>(`/ofertas/${id}`)
