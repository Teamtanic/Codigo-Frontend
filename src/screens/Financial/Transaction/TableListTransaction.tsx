import { Column, DataProps, Table } from "../../../components/Table";

export function TableListTransaction({ data }: DataProps) {

    var columns : Column[] = [
        { key: 'id', heading: 'ID', copiableId: true },
        { key: 'description', heading: 'Descrição' },
        { key: 'amount', heading: 'Valor' },
        { key: 'type', heading: 'Transação', card: true, cardStyle: (row) => row.type === 'ENTRADA' ? 'bg-emerald-400' : 'bg-red-400' },
        { key: 'dt_cashflow', heading: 'Data' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}