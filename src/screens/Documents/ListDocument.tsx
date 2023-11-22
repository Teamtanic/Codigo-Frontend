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
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato"
        },
        {
            id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato"
        },
        {
            id: "f5537fec-16f2-452b-a6e4-4e60d36f5686",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato"
        },
        {
            id: "3f506407-4638-4bd0-abb9-d2bcf415239c",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato"
        },
        {
            id: "277dc916-e89e-444d-ac02-3bab065e488d",
            name: "dOC_3245_Mc",
            dt_doc: "20/10/2023",
            size: "103MB",
            type: "PDF",
            doc_type: "Contrato"
        }
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
                        <TableListDocument data={documents} />

                        <DocumentModal title="Cadastro Documento" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}