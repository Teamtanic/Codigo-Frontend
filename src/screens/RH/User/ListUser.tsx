import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListUser } from "./TableListUser";
import { UserModal } from "./UserModal";

export function ListUser() {
    var users = [
        {
            id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
        {
            id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH", prontuary: 'CB3046874',
            telephone: "1334684219", cell_phone: "13997854230", email: "paulo@gmail.com",
            course: "Análise e Desenvolvimento de Sistemas",
            project: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", customer: "McDONALDS", type: "Serviço", status: "Em andamento" },
            ]
        },
    ];

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Usuários</Heading>

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
                        <TableListUser data={users} />

                        <UserModal title="Enviar Token de Cadastro" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}