import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { RoleModal } from "./RoleModal";

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
    
    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <RoleModal title="Editar Cargo" action="Editar" />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}