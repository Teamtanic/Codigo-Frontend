import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { CardModal } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { TableListCompany } from "./TableListCompany";

interface CompanyProps {
    id: string,
    nome: string,
    relacao: string,
    codigo: string
}

export function ListCompany() {

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Empresas</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root colorLabel="text-gray-900">
                            <TextInput.Icon>
                                <MagnifyingGlass />
                            </TextInput.Icon>
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <TableListCompany />

                        <CardModal title="Cadastro de Empresa" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
                            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                                <TextInput.Root labelFor="companyName" labelText="Razão Social">
                                    <TextInput.Input id="companyName" type="text" placeholder="Digite a razão social..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="code" labelText="CPF ou CNPJ">
                                    <TextInput.Input id="code" type="text" placeholder="Digite o código..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="email" labelText="E-mail">
                                    <TextInput.Input id="email" type="text" placeholder="Digite o e-mail..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="tel" labelText="Telefone">
                                    <TextInput.Input id="tel" type="text" placeholder="Digite o telefone de contato..." />
                                </TextInput.Root>
                                <div>
                                    <Text>Relação da Empresa</Text>
                                    <div className="flex w-full gap-12">
                                        <label htmlFor="checkCustomer" className="flex items-center gap-2 my-2">
                                            <Checkbox id="checkCustomer" />
                                            <Text size="sm">
                                                Cliente
                                            </Text>
                                        </label>

                                        <label htmlFor="checkSupplier" className="flex items-center gap-2 my-2 mr-5">
                                            <Checkbox id="checkSupplier" />
                                            <Text size="sm">
                                                Fornecedor
                                            </Text>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </CardModal>
                    </div>
                </div>
            </div>

        </Container>
    )
}