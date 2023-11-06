import { DataProps, Table } from "../../../components/Table";

export function TableListBank({ data }: DataProps) {
    var columns = [
        { key: 'name', heading: 'Banco' },
        { key: 'balance', heading: 'Valor' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}