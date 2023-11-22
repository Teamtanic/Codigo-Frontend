import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { AuthorityModal } from "./AuthorityModal";

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
                <AuthorityModal title="Editar Autoridade" action="Editar" />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}