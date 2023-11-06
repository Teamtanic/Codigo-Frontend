import { DataProps, Table } from "../../../components/Table";

export function TableListDepartment({ data }: DataProps) {
    var columns = [
        { key: 'name', heading: 'Departamento' },
        { key: 'employees', heading: 'Funcionários' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}