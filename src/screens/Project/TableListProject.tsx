import { DataProps, Table } from "../../components/Table";

export function TableListProject({ data }: DataProps){
    var columns = [
        { key: 'id', heading: 'ID', copiableId: true },
        { key: 'description', heading: 'Projeto' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}