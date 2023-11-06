import { DataProps, Table } from "../../../components/Table";

export function TableListUser({data} : DataProps) {
    var columns = [
        { key: 'name', heading: 'Nome' },
        { key: 'role', heading: 'Cargo' },
        { key: 'department', heading: 'Departamento' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}