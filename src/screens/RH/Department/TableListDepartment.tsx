import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { DepartmentModal } from "./DepartmentModal";

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

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <DepartmentModal title="Editar Departamento" action="Editar" />
        }
    ]


    return (
        <Table data={data} columns={columns} options={options} />
    )
}