import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { CardModal } from "../../../components/CardModal";
import { TableListUser } from "./TableListUser";

export function ListUser() {
    var users = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
    ];

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Usuários</Heading>

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
                        <TableListUser data={users} />

                        <CardModal title="Cadastro de Produto" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
                            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                                <TextInput.Root labelFor="product" labelText="Produto">
                                    <TextInput.Input id="product" type="text" placeholder="Digite o produto..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="quantity" labelText="Quantidade">
                                    <TextInput.Input id="quantity" type="number" min="0" placeholder="Digite a quantidade..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="supplier" labelText="Fornecedor">
                                    <TextInput.Input id="supplier" type="text" placeholder="Informe o fornecedor..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="price" labelText="Preço">
                                    <TextInput.Input id="price" type="text" placeholder="Informe o preço..." />
                                </TextInput.Root>
                            </div>
                        </CardModal>
                    </div>
                </div>
            </div>

        </Container>
    )
}