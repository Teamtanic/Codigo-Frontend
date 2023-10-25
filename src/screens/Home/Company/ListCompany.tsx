import { DotsThreeOutlineVertical } from "phosphor-react";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";

export function ListCompany() {
    var empresas = [
        { id: 231321, nome: 'MCDONALDS', relacao: 'fornececedor', codigo: 13233123323 },
        { id: 76575677657567, nome: 'Burger King', relacao: 'fornececedor', codigo: '1323dawdwada3123323' },
        { id: 235431321, nome: 'Vivara', relacao: 'fornececedor', codigo: 13233123323 },
        { id: 231398721, nome: 'Posto Ipiranga', relacao: 'fornececedor', codigo: '1323312332sadada3' },
        { id: 876231321, nome: 'Microsoft', relacao: 'fornececedor', codigo: 13233123323 }
    ];


    function copyText (event: React.MouseEvent<HTMLElement>) {
        console.log(event.relatedTarget)
        //navigator.clipboard.writeText(event.target);
    }


    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 flex-col">
                <Heading size="lg">Empresas</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root colorLabel="text-gray-900">
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <table className="w-full">
                            <thead>
                                <Card className="w-full py-3 px-4 rounded-bl-none items-center">
                                    <tr className="w-full grid grid-cols-9 justify-start gap-3">
                                        <th className="col-span-1 flex justify-start">
                                            <Heading className="!text-gray-800">ID</Heading>
                                        </th>
                                        <th className="col-span-3 flex justify-start">
                                            <Heading className="!text-gray-800">| Nome</Heading>
                                        </th>
                                        <th className="col-span-2 flex justify-center">
                                            <Heading className="!text-gray-800">| Relação</Heading>
                                        </th>
                                        <th className="col-span-2 flex justify-start">
                                            <Heading className="!text-gray-800">| Código</Heading>
                                        </th>
                                        <th className="col-span-1 flex justify-start">
                                        </th>
                                    </tr>
                                </Card>
                            </thead>

                            <tbody>
                                {empresas.map(empresa => {
                                    return (
                                        <Card key={empresa.id} className="w-full py-3 px-4 mt-4">
                                            <tr className="grid px-4 grid-cols-9 items-center overflow-hidden gap-3">
                                                <td className="col-span-1 flex justify-start">
                                                    <Heading className="!text-gray-800 truncate">{empresa.id}</Heading>
                                                </td>
                                                <td className="col-span-3 flex justify-start">
                                                    <Heading className="!text-gray-800 max-h-10 truncate">{empresa.nome}</Heading>
                                                </td>
                                                <td className="col-span-2 flex justify-start">
                                                    <Heading className="m-auto">
                                                        <Card className="!bg-blue-950 w-full flex items-center justify-center">
                                                            <Text className="!text-gray-100 ">{empresa.relacao}</Text>
                                                        </Card>
                                                    </Heading>
                                                </td>
                                                <td className="col-span-2 flex justify-start" onClick={copyText}>
                                                    <Heading className="!text-gray-800 truncate">{empresa.codigo}</Heading>
                                                </td>
                                                <td className="col-span-1 flex justify-start">
                                                    <DotsThreeOutlineVertical className="!text-gray-800 truncate ml-auto mr-0" size={32} />
                                                </td>
                                            </tr>
                                        </Card>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    )
}