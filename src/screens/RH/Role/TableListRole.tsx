import { Column, Table } from "../../../components/Table";

export interface RoleProps {
    id: string,
    name: string,
    employees: string
}

export function TableListRole({ data }: {data : RoleProps[]}) {
    var columns : Column<RoleProps>[] = [
        { key: 'name', title: 'Cargo' },
        { key: 'employees', title: 'Funcionários' },
    ];
    
    return (
        <Table data={data} columns={columns} />
    )
}