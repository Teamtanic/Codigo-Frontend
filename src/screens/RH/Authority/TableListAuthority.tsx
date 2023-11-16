import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { AuthorityEditModal } from "./AuthorityEditModal";

export interface AuthorityProps {
    privilege: string,
    role: string,
    department: string
}

export function TableListAuthority({data} : {data : AuthorityProps[]}) {
    var columns : Column<AuthorityProps>[] = [
        { key: 'role', title: 'Cargo' },
        { key: 'department', title: 'Departamento' },
        { key: 'privilege', title: 'Privilégio de Usuário' },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <AuthorityEditModal />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}