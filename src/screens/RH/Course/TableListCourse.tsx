import { DataProps, Table } from "../../../components/Table";

export function TableListCourse({ data }: DataProps) {
    var columns = [
        { key: 'name', heading: 'Curso' },
        { key: 'employees', heading: 'Funcionários' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}