import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { Text } from "../../../components/Text";
import { UserProps } from "../User/TableListUser";
import { DepartmentModal } from "./DepartmentModal";

export interface DepartmentProps {
    id: string,
    name: string,
    employees: UserProps[]
}

export function TableListDepartment({ data }: {data : DepartmentProps[]}) {
    var columns : Column<DepartmentProps>[] = [
        { key: 'name', title: 'Departamento' },
        { key: 'employees', title: 'Funcionários', render: ({employees}) => <Text className="!text-gray-900">{employees.length} {employees.length === 1 ? ' funcionário' : ' funcionários'}</Text> },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <DepartmentModal title="Editar Departamento" action="Editar" optionsTrigger />
        }
    ]


    return (
        <Table link="departamento" data={data} columns={columns} options={options} />
    )
}