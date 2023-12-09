export interface DocumentRequest {
  documentTypeId: string
  title?: string
  description?: string
  file: File
}

export interface DocumentResponse {
  projectId: string
  id: string
  documentType: DocumentType
  alfrescoId: string
  document: Node
}
