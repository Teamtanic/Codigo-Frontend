import { api } from '../api'
import { DocumentRequest, DocumentResponse } from './types'

export const getAllDocuments = () => api.get<DocumentResponse[]>('/documentos')

export const createDocument = (documentData: DocumentRequest) =>
  api.post<DocumentResponse>('/documentos', documentData)
