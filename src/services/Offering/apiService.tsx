import { api } from '../api'
import {
  OfferingCreateRequest,
  OfferingResponse,
  OfferingResponsePaginate
} from './types'

export const getAllOffers = () => api.get<OfferingResponsePaginate>('/ofertas')

export const createOffer = (offerData: OfferingCreateRequest) =>
  api.post<OfferingResponse>('/ofertas', offerData)
