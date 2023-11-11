import { CopiableText } from "../../components/CopiableText";
import { Column, Table } from "../../components/Table";

export interface ProjectProps {
    id: string,
    description: string
}

export function TableListProject({ data }: {data: ProjectProps[]}){
    var columns : Column<ProjectProps>[] = [
        { key: 'id', title: 'ID', 
        render: ({id}) => 
            <CopiableText id={true} text={id}></CopiableText>,
        width: '10'
    },
        { key: 'description', title: 'Projeto' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}