import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { CourseModal } from "./CourseModal";

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

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <CourseModal title="Editar Curso" action="Editar" />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}