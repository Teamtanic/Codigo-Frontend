import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListAuthority } from "./TableListAuthority";
import { AuthorityModal } from "./AuthorityModal";

export function ListAuthority() {
    const authorities = [
        { id: "123", role: "Funcionario", department: "RH", privilege: "Pode ler"},
        { id: "1234", role: "Chefe", department: "RH", privilege: "Pode ler"},
        { id: "1235", role: "Funcionario", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "1236", role: "Supervisor", department: "FINANCEIRO", privilege: "Pode ler"},
        { id: "1237", role: "Supervisor", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "1238", role: "Chefe", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "1239", role: "Supervisor", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "12312", role: "Funcionario", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "12313", role: "Funcionario", department: "ALMOXARIFADO", privilege: "Pode ler"},
        { id: "12314", role: "Funcionario", department: "OPERAÇÃO", privilege: "Pode ler"},
    ]

    return(
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Autoridades Definidas no Sistema</Heading>

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
                        <TableListAuthority data={authorities} />

                        <AuthorityModal title="Adicionar Autoridade" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    );
}