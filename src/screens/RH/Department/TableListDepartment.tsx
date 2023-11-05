import { Table } from "../../../components/Table";

export function TableListDepartment() {
    var departments = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Almoxarifado", employees: 12 },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "RH", employees: 9 },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Desenvolvedor", employees: 11 },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Marketing", employees: 15 },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Supervisor", employees: 5 },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Financeiro", employees: 17 },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Suporte", employees: 46 },
    ];

    var columns = [
        { key: 'name', heading: 'Departamento', truncate: true },
        { key: 'employees', heading: 'Funcionários' },
    ];

    return (
        <Table data={departments} columns={columns} />
    )
}