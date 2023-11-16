import { CopiableText } from "../../components/CopiableText";
import { ModalOptions } from "../../components/OptionsMenu";
import { Column, Table } from "../../components/Table";
import { ProjectEditModal } from "./ProjectEditModal";

export interface ProjectProps {
    id: string,
    description: string,
    customer: string,
    status: string
}

export interface TableListProps {
    hasOptions?: boolean;
}

export function TableListProject({ data, hasOptions = true }: {data: ProjectProps[]} & TableListProps){
    var columns : Column<ProjectProps>[] = [
        { key: 'id', title: 'ID', 
        render: ({id}) => 
            <CopiableText id={true} text={id}></CopiableText>,
        width: 'w-10'
    },
        { key: 'description', title: 'Projeto' },
        { key: 'customer', title: 'Cliente' },
        { key: 'status', title: 'Situação' }
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <ProjectEditModal />
        }
    ]

    return (
        <Table data={data} columns={columns} menu={hasOptions} options={options}/>
    )
}