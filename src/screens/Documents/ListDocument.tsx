import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListDocument } from "./TableListDocument";
import { DocumentModal } from "./DocumentModal";

export function ListDocument() {
    var documents = [
        {
            id: "75b6a6f8-88fb-4642-bd79-60cd4865691c",
            name: "dOC_30145_Gd",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato",
            project: [{
                id: "4d19e455-9725-435f-96f4-c0d0a684a202",
                description: "Projeto relacionado",
                customer: 'McDonalds',
                status: "Em andamento"
            }],
            user: [{
                id: "7ba0b55a-0c52-4d13-bb0f-841121582f35",
                name: "Usuario relacionado",
                role: "Funcionário",
                department: "Financeiro"
            }]
        },
        {
            id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a",
            name: "dOC_3245_Fv",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato",
            project: [{
                id: "4d19e455-9725-435f-96f4-c0d0a684a202",
                description: "Projeto relacionado",
                customer: 'McDonalds',
                status: "Em andamento"
            }],
            user: [{
                id: "7ba0b55a-0c52-4d13-bb0f-841121582f35",
                name: "Usuario relacionado",
                role: "Funcionário",
                department: "Financeiro"
            }]
        },
        {
            id: "f5537fec-16f2-452b-a6e4-4e60d36f5686",
            name: "dOC_5645_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato",
            project: [{
                id: "4d19e455-9725-435f-96f4-c0d0a684a202",
                description: "Projeto relacionado",
                customer: 'McDonalds',
                status: "Em andamento"
            }],
            user: [{
                id: "7ba0b55a-0c52-4d13-bb0f-841121582f35",
                name: "Usuario relacionado",
                role: "Funcionário",
                department: "Financeiro"
            }]
        },
        {
            id: "3f506407-4638-4bd0-abb9-d2bcf415239c",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato",
            project: [{
                id: "4d19e455-9725-435f-96f4-c0d0a684a202",
                description: "Projeto relacionado",
                customer: 'McDonalds',
                status: "Em andamento"
            }],
            user: [{
                id: "7ba0b55a-0c52-4d13-bb0f-841121582f35",
                name: "Usuario relacionado",
                role: "Funcionário",
                department: "Financeiro"
            }]
        },
        {
            id: "277dc916-e89e-444d-ac02-3bab065e488d",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato",
            project: [{
                id: "4d19e455-9725-435f-96f4-c0d0a684a202",
                description: "Projeto relacionado",
                customer: 'McDonalds',
                status: "Em andamento"
            }],
            user: [{
                id: "7ba0b55a-0c52-4d13-bb0f-841121582f35",
                name: "Usuario relacionado",
                role: "Funcionário",
                department: "Financeiro"
            }]
        }
    ];


    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Documentos</Heading>

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
                        <TableListDocument data={documents} />

                        <DocumentModal title="Cadastro Documento" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}