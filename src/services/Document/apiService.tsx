import { api } from "../api";
import { DocumentRequest, DocumentResponse, DocumentType } from "./types";

export const getAllDocuments = (folderPath: string = "") =>
  api.get<DocumentResponse[]>("/documentos", {
    params: {
      folderPath,
    },
  });

export const getDocumentById = (id: string) =>
  api.get<DocumentResponse>(`/documentos/${id}`);

export const getDocumentContent = (id: string) =>
  api.get<Blob>(`/documentos/${id}/content`, { responseType: "blob" });

export const getAllDocumentTypes = () =>
  api.get<DocumentType[]>(`/tipo-documento`);

export const createDocument = (data: DocumentRequest) => {
  const formdata = new FormData();
  formdata.append("file", data.file, data.file.name);
  formdata.append("documentTypeId", data.documentTypeId);
  formdata.append("title", data.title);
  formdata.append("description", data.description);
  formdata.append("folderPath", data.folderPath);

  console.log(formdata);

  return api.post<DocumentResponse>("/documentos/upload", formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
