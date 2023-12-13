import { Column, Table } from "../../components/Table";
import { DocumentResponse } from "../../services/Document/types";
import { humanFileSize } from "../../services/utils/bytesFormatter";
import { humanInstant } from "../../services/utils/instantFormatter";
import { TableListProps } from "../Project/TableListProject";

const columns: Column<DocumentResponse>[] = [
  { key: "name", title: "Nome", dataIndex: "name" },
  {
    key: "dt_doc",
    title: "Data",
    dataIndex: "modifiedAt",
    render: ({ modifiedAt }) => humanInstant(modifiedAt),
  },
  {
    key: "size",
    title: "Tamanho",
    dataIndex: "content",
    render: ({ content: { sizeInBytes } }) => (
      <span>{humanFileSize(sizeInBytes)}</span>
    ),
  },
  {
    key: "type",
    title: "Tipo",
    dataIndex: "content",
    render: ({ content: { mimeTypeName } }) => <span>{mimeTypeName}</span>,
  },
  {
    key: "doc_type",
    title: "Tipo de Documento",
    dataIndex: "document",
    render: ({ document }) =>
      document ? <span>{document.documentType.name}</span> : "Outro",
  },
];

export function TableListDocument(
  { data }: { data: DocumentResponse[] },
  { hasOptions = true }: TableListProps
) {
  return (
    <Table link="documento" data={data} menu={hasOptions} columns={columns} />
  );
}
