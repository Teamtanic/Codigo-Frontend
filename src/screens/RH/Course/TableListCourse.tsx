import { Column, Table } from "../../../components/Table";

export interface CourseProps {
    id: string,
    name: string,
    employees: string
}

export function TableListCourse({ data }: {data : CourseProps[]}) {
    var columns : Column<CourseProps>[] = [
        { key: 'name', title: 'Curso' },
        { key: 'employees', title: 'Funcionários' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}