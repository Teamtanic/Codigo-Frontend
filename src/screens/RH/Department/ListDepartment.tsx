import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListDepartment } from "./TableListDepartment";
import { DepartmentModal } from "./DepartmentModal";

export function ListDepartment() {
    var departments = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Almoxarifado", employees: 12 },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "RH", employees: 9 },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Desenvolvedor", employees: 11 },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Marketing", employees: 15 },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Supervisor", employees: 5 },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Financeiro", employees: 17 },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Suporte", employees: 46 },
    ];

    var departmentsDTO = departments.map(department => ({
        ...department,
        employees: `${department.employees} ${department.employees === 1 ? ' funcionário' : ' funcionários'}`
    }))
    
    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Departamentos</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root labelFor="text-gray-900">
                            <TextInput.Icon>
                                <MagnifyingGlass />
                            </TextInput.Icon>
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <TableListDepartment data={departmentsDTO} />

                        <DepartmentModal title="Cadastro de Departamento" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}