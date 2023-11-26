import { Column, Table } from "../../../components/Table";

export interface UserProps {
    id: string,
    name: string,
    role: string,
    department: string
}

export function TableListUser({data} : {data : UserProps[]}) {
    var columns : Column<UserProps>[] = [
        { key: 'name', title: 'Nome' },
        { key: 'role', title: 'Cargo' },
        { key: 'department', title: 'Departamento' },
    ];

    return (
        <Table link="usuario" data={data} columns={columns} />
    )
}