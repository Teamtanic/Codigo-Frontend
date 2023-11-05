import { Table } from "../../../components/Table";

export function TableListRole() {
    var roles = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Chefe", employees: 12 },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Funcionário", employees: 9 },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Supervisor", employees: 11 },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Gerente", employees: 15 },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Estagiario", employees: 5 },
    ];

    var columns = [
        { key: 'name', heading: 'Cargo', truncate: true },
        { key: 'employees', heading: 'Funcionários' },
    ];

    return (
        <Table data={roles} columns={columns} />
    )
}