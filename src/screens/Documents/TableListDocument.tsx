import { Column, Table } from "../../components/Table";
import { TableListProps } from "../Project/TableListProject";

export interface DocumentProps {
    id: string,
    name: string,
    dt_doc: string,
    size: string,
    type: string,
    doc_type: string,
}

export function TableListDocument({ data }: {data: DocumentProps[]}, { hasOptions = true }: TableListProps) {
    var columns : Column<DocumentProps>[] = [
        { key: 'name', title: 'Nome' },
        { key: 'dt_doc', title: 'Data' },
        { key: 'size', title: 'Tamanho' },
        { key: 'type', title: 'Tipo' },
        { key: 'doc_type', title: 'Tipo de Documento' }
    ];
    
    return (
        <Table link="documento" data={data} menu={hasOptions} columns={columns} />
    )
}