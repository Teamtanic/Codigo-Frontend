import { Column, Table } from "../../../components/Table";

export interface DepartmentProps {
    id: string,
    name: string,
    employees: string
}

export function TableListDepartment({ data }: {data : DepartmentProps[]}) {
    var columns : Column<DepartmentProps>[] = [
        { key: 'name', title: 'Departamento' },
        { key: 'employees', title: 'Funcionários' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}