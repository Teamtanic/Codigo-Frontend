import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { Text } from "../../../components/Text";
import { UserProps } from "../User/TableListUser";
import { CourseModal } from "./CourseModal";

export interface CourseProps {
    id: string,
    name: string
    employees: UserProps[]
}

export function TableListCourse({ data }: {data : CourseProps[]}) {
    var columns : Column<CourseProps>[] = [
        { key: 'name', title: 'Curso' },
        { key: 'employees', title: 'Funcionários', render: ({employees}) => <Text className="!text-gray-900">{employees.length} {employees.length === 1 ? ' funcionário' : ' funcionários'}</Text>  },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <CourseModal title="Editar Curso" action="Editar" optionsTrigger />
        }
    ]

    return (
        <Table link="curso" data={data} columns={columns} options={options} />
    )
}