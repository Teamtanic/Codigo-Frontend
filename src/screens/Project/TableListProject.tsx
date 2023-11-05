import { Table } from "../../components/Table";

export function TableListProject(){
    var projects = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", description: "Automação Industrial" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", description: "Matemática" },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", description: "Ciência da Computação" },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", description: "Geografia" },
    ];

    var columns = [
        { key: 'id', heading: 'ID', copiableId: true },
        { key: 'description', heading: 'Projeto' },
    ];

    return (
        <Table data={projects} columns={columns} />
    )
}