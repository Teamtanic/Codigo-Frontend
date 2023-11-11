import { Column, Table } from "../../components/Table";

export interface DocumentProps {
    id: string,
    name: string,
    dt_doc: string,
    size: string,
    type: string,
    doc_type: string,
}

export function TableListDocument({ data }: {data: DocumentProps[]}) {
    var columns : Column<DocumentProps>[] = [
        { key: 'name', title: 'Nome' },
        { key: 'dt_doc', title: 'Data' },
        { key: 'size', title: 'Tamanho' },
        { key: 'type', title: 'Tipo' },
        { key: 'doc_type', title: 'Tipo de Documento' }
    ];
    
    return (
        <Table data={data} columns={columns} />
    )
}