import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListCompany } from "./TableListCompany";
import { codeMask } from "../../utils";
import { CompanyModal } from "./CompanyModal";




export function ListCompany() {
    var empresas = [
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100" },
        { id: "37514f28-11af-4ef5-aae9-6054d8250fdd", name: 'Burger King', relation: 'CLIENTE', code: '48820178000105' },
        { id: "50ef8007-a694-4617-861e-98ac87ca2a31", name: 'Vivara', relation: 'FORNECEDOR', code: "54365277600" },
        { id: "bfdfe8f5-500b-4b7a-83ec-0fbb33fb63b6", name: 'Posto Ipiranga', relation: 'CLIENTE', code: '48820178000105' },
        { id: "7ba0b55a-0c52-4d13-bb0f-841121582f35", name: 'Microsoft', relation: 'FORNECEDOR', code: "85445832023" },
        { id: "4d19e455-9725-435f-96f4-c0d0a684a202", name: 'Microsoft', relation: 'FORNECEDOR', code: "48820178000105" }
    ];

    empresas = empresas.map(empresa => ({
        ...empresa,
        code: codeMask(empresa.code)
    }));

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Empresas</Heading>

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
                        <TableListCompany data={empresas} />

                        <CompanyModal action="Adicionar" title="Cadastro de Empresa" optionsTrigger={false} />
                    </div>
                </div>
            </div>

        </Container>
    )
}