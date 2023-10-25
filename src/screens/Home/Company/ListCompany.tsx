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
        { id: 231321, nome: 'MCDONALDS', relacao: 'fornecedor', codigo: 13233123323 },
        { id: 1, nome: 'Burger King', relacao: 'fornecedor', codigo: '1323dawdwada3123323' },
        { id: 235431321, nome: 'Vivara', relacao: 'fornecedor', codigo: 13233123323 },
        { id: 231398721, nome: 'Posto Ipiranga', relacao: 'cliente', codigo: '1323312332sadada3' },
        { id: 876231321, nome: 'Microsoft', relacao: 'fornecedor', codigo: 13233123323 },
        { id: 87627631321, nome: 'Microsoft', relacao: 'fornecedor', codigo: 13233123323 }
    ];

    function copyText(event: React.MouseEvent<HTMLElement>) {
        const { target } = event;
        
        if (target instanceof HTMLElement) {
          const textToCopy = target.textContent;
          
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
                        <table className="w-full ">
                            <thead>
                                <Card className="w-full py-3 px-4 rounded-bl-none items-center">
                                    <tr className="w-full grid grid-cols-9 justify-start gap-3">
                                        <th className="col-span-1 max-md:col-span-2 flex justify-start">
                                            <Heading className="!text-gray-800">ID</Heading>
                                        </th>
                                        <th className="col-span-3 max-md:col-span-4 flex justify-start">
                                            <Heading className="!text-gray-800">| Nome</Heading>
                                        </th>
                                        <th className="col-span-2 max-md:col-span-3 flex justify-center">
                                            <Heading className="!text-gray-800">| Relação</Heading>
                                        </th>
                                        <th className="col-span-2 max-md:hidden flex justify-start">
                                            <Heading className="!text-gray-800">| Código</Heading>
                                        </th>
                                        <th className="col-span-1 max-md:col-span-0 flex justify-start max-md:hidden">
                                        </th>
                                    </tr>
                                </Card>
                            </thead>

                            <tbody>
                                {empresas.map(empresa => {
                                    return (
                                        <Card key={empresa.id} className="w-full py-3 px-4 mt-4 shadow-md">
                                            <tr className="grid px-4 max-md:px-1 max-md:gap-1 grid-cols-9 items-center overflow-hidden gap-3">
                                                <td className="col-span-1 max-md:col-span-2 flex justify-start truncate">
                                                    <Button className="bg-transparent !px-1 !justify-start hover:bg-gray-200" title='Clique para copiar' textSize="xm" textStyle="!text-gray-800 truncate font-semibold !text-left" onClick={copyText}>
                                                        {empresa.id}
                                                    </Button>
                                                </td>
                                                <td className="col-span-3 max-md:col-span-4 flex justify-start">
                                                    <Text className="!text-gray-800 max-h-10 truncate font-semibold">{empresa.nome}</Text>
                                                </td>
                                                <td className="col-span-2 max-md:col-span-3 flex justify-start">
                                                    <Text className="m-auto">
                                                        <Card className={`${empresa.relacao == "fornecedor" ? "!bg-blue-950 ": "!bg-emerald-600"} w-full flex items-center justify-center`}>
                                                            <Text size="xm" className="!text-gray-100 font-semibold">{empresa.relacao}</Text>
                                                        </Card>
                                                    </Text>
                                                </td>
                                                <td className="col-span-2 flex justify-start max-md:hidden">
                                                    <Text className="!text-gray-800 truncate font-semibold">{empresa.codigo}</Text>
                                                </td>
                                                <td className="col-span-1 flex justify-start max-md:hidden">
                                                    <DotsThreeOutlineVertical className="!text-gray-800 truncate ml-auto mr-0" size={32} />
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