import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { CardModal } from "../../../components/CardModal";
import { TableListRole } from "./TableListRole";
import { RoleModal } from "./RoleModal";

export function ListRoles() {
    var roles = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Chefe",
        employees: [
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        ]  },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Funcionário",
        employees: [
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        ]  },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Supervisor",
        employees: [
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        ] },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Gerente",
        employees: [
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        ]  },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Estagiario",
        employees: [
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        ]  },
    ];

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Cargos</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root labelStyle="text-gray-900">
                            <TextInput.Icon>
                                <MagnifyingGlass />
                            </TextInput.Icon>
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <TableListRole data={roles} />

                        <RoleModal title="Cadastro de Cargo" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}