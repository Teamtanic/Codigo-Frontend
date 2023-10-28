import { DotsThreeOutlineVertical } from "phosphor-react";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { MagnifyingGlass } from 'phosphor-react';

export function ListCompany() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    var empresas = [
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", nome: 'MCDONALDS', relacao: 'fornecedor', codigo: "61556481000100" },
        { id: "37514f28-11af-4ef5-aae9-6054d8250fdd", nome: 'Burger King', relacao: 'fornecedor', codigo: '48820178000105' },
        { id: "50ef8007-a694-4617-861e-98ac87ca2a31", nome: 'Vivara', relacao: 'fornecedor', codigo: "54365277600" },
        { id: "bfdfe8f5-500b-4b7a-83ec-0fbb33fb63b6", nome: 'Posto Ipiranga', relacao: 'cliente', codigo: '48820178000105' },
        { id: "7ba0b55a-0c52-4d13-bb0f-841121582f35", nome: 'Microsoft', relacao: 'fornecedor', codigo: "85445832023" },
        { id: "4d19e455-9725-435f-96f4-c0d0a684a202", nome: 'Microsoft', relacao: 'fornecedor', codigo: "48820178000105" }
    ];

    const codeMask = (code: string) => {
        if (code.length === 11) {
            return code
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        }

        if (code.length === 14) {
            return code
                .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
                .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
        }

        return ''
    }

    function formatUUID(inputString: string) {
        if (inputString.length === 36) {
            const startChars = inputString.slice(0, 5);
            const endChars = inputString.slice(-5);
            return `${startChars}...${endChars}`;
        } else {
            return inputString;
        }
    }

    function copyText(event: React.MouseEvent<HTMLElement>, id: string) {
        const { target } = event;

        if (target instanceof HTMLElement) {
            const textToCopy = id;

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy);

                setIsDialogVisible(true);

                setTimeout(() => {
                    setIsDialogVisible(false);
                }, 3000);
            }
        }
    }


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
                        <table className="w-full">
                            <thead >
                                <Card asChild  >
                                    <tr className="w-full py-3 text-left border-b-8 border-white dark:border-gray-700">
                                        <th className="py-3 px-4 rounded-bl-none rounded-tl-2xl items-center border-r-4 border-gray-700">
                                            <Heading className="!text-gray-800">ID</Heading>
                                        </th>
                                        <th className="px-4 w-96 border-r-4 border-gray-700">
                                            <Heading className="!text-gray-800">Nome</Heading>
                                        </th>
                                        <th className="px-4 w-48 md:border-r-4 md:border-gray-700 max-md:rounded-r-2xl">
                                            <Heading className="!text-gray-800">Relação</Heading>
                                        </th>
                                        <th className="px-4 max-md:hidden">
                                            <Heading className="!text-gray-800">Código</Heading>
                                        </th>
                                        <th className="px-4 max-md:hidden rounded-r-2xl">
                                        </th>
                                    </tr>
                                </Card>
                            </thead>

                            <tbody>
                                {empresas.map(empresa => {
                                    return (
                                        <Card asChild key={empresa.id} className="">
                                            <tr className="h-16 border-b-8 border-white dark:border-gray-700">
                                                <td className="w-32 rounded-l-xl">
                                                    <Button className="bg-transparent !px-1 !justify-start hover:bg-gray-200" title='Clique para copiar' textSize="xm" textStyle="!text-gray-800 truncate font-semibold" onClick={(event) => copyText(event, empresa.id)}>
                                                        {formatUUID(empresa.id)}
                                                    </Button>
                                                </td>
                                                <td className="px-2">
                                                    <Text className="!text-gray-800 max-h-10 truncate font-semibold">{empresa.nome}</Text>
                                                </td>
                                                <td className="px-2 max-md:rounded-r-xl">
                                                    <Card className={`${empresa.relacao == "fornecedor" ? "!bg-blue-950 " : "!bg-emerald-600"} w-fit flex items-center justify-center`}>
                                                        <Text size="xm" className="!text-gray-100 font-semibold">{empresa.relacao}</Text>
                                                    </Card>
                                                </td>
                                                <td className="px-2 max-md:hidden">
                                                    <Card className="!bg-sky-300">
                                                        <Text className="!text-gray-800 truncate font-semibold">
                                                            {empresa.codigo.length === 11 ? 'CPF: ' : empresa.codigo.length === 14 ? "CNPJ: " : "Não consta"}{codeMask(empresa.codigo)}
                                                        </Text>
                                                    </Card>
                                                </td>
                                                <td className="px-6 max-md:hidden rounded-r-xl">
                                                    <div className="hover:bg-gray-200 h-full p-1 w-fit rounded-full mr-0 ml-auto">
                                                        <DotsThreeOutlineVertical className="!text-gray-800 truncate ml-auto mr-0" size={32} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </Card>
                                    )
                                })}
                                {isDialogVisible && (
                                    <div className="fixed w-fit bottom-5 right-5 bg-white p-3 rounded shadow border border-gray-300">
                                        <Text className="text-gray-900">Copiado!</Text>
                                    </div>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    )
}