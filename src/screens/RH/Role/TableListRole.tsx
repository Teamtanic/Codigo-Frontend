import { DataProps, Table } from "../../../components/Table";

export function TableListRole({ data }: DataProps) {
    var columns = [
        { key: 'name', heading: 'Cargo' },
        { key: 'employees', heading: 'Funcionários' },
    ];
    
    return (
        <Table data={data} columns={columns} />
    )
}