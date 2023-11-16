import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { CourseEditModal } from "./CourseEditModal";

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
                <CourseEditModal />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}