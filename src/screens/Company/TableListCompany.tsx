import { Column, DataProps, Table } from "../../components/Table";

export function TableListCompany({ data }: DataProps){

    var columns : Column[] = [
        { key: 'id', heading: 'ID', copiableId: true },
        { key: 'name', heading: 'Nome' },
        { key: 'relation', heading: 'Relação', card: true, cardStyle: (row) => row.relation === 'CLIENTE' ? 'bg-emerald-600' : 'bg-blue-950', textStyle: '!text-gray-100 text-sm'  },
        { key: 'code', heading: 'Código', card: true, cardStyle: 'bg-blue-400' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}