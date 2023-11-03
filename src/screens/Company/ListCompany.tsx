import { DotsThreeOutlineVertical } from "phosphor-react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import React, { Fragment, useState } from "react";
import { MagnifyingGlass } from 'phosphor-react';
import { Menu, Transition } from "@headlessui/react";
import * as Popover from '@radix-ui/react-popover';
import { CardModal } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { codeMask, formatUUID } from "../../utils";

interface CompanyProps {
    id: string,
    nome: string,
    relacao: string,
    codigo: string
}

export function ListCompany() {

    var empresas = [
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", nome: 'MCDONALDS', relacao: 'fornecedor', codigo: "61556481000100" },
        { id: "37514f28-11af-4ef5-aae9-6054d8250fdd", nome: 'Burger King', relacao: 'fornecedor', codigo: '48820178000105' },
        { id: "50ef8007-a694-4617-861e-98ac87ca2a31", nome: 'Vivara', relacao: 'fornecedor', codigo: "54365277600" },
        { id: "bfdfe8f5-500b-4b7a-83ec-0fbb33fb63b6", nome: 'Posto Ipiranga', relacao: 'cliente', codigo: '48820178000105' },
        { id: "7ba0b55a-0c52-4d13-bb0f-841121582f35", nome: 'Microsoft', relacao: 'fornecedor', codigo: "85445832023" },
        { id: "4d19e455-9725-435f-96f4-c0d0a684a202", nome: 'Microsoft', relacao: 'fornecedor', codigo: "48820178000105" }
    ];

    const [openMenus, setOpenMenus] = useState<string[]>([]);

    const timeoutId = React.useRef<number | null>(null);

    function copyText(event: React.MouseEvent<HTMLElement>, id: string) {
        const { target } = event;

        if (target instanceof HTMLElement) {
            const textToCopy = id;

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy);

                // Abra o menu para o elemento clicado
                setOpenMenus([id]);

                if (timeoutId.current) {
                    clearTimeout(timeoutId.current);
                }

                // Defina um temporizador para fechar o menu
                timeoutId.current = setTimeout(() => {
                    setOpenMenus([]);
                }, 2500);
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
                        <table className="w-full border-separate border-spacing-y-4 ">
                            <thead >
                                <Card asChild  >
                                    <tr className="w-full py-3 text-left dark:border-gray-700 ">
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
                                        <Card asChild key={empresa.id} className="cursor-pointer hover:bg-gray-400 
                                        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                            <tr className="h-16 dark:border-gray-700">
                                                <td className="w-32 rounded-l-xl mb-20">
                                                    <Popover.Root open={openMenus.includes(empresa.id)}>
                                                        <Popover.Trigger >
                                                            <Button className="bg-transparent !px-1 !justify-start hover:bg-gray-200" title='Clique para copiar' textSize="xm" textStyle="!text-gray-800 truncate font-semibold"
                                                                onClick={(event) => {
                                                                    copyText(event, empresa.id);
                                                                }}>
                                                                {formatUUID(empresa.id)}
                                                            </Button>
                                                        </Popover.Trigger>

                                                        <Popover.Portal>

                                                            <Popover.Content className="h-fit w-fit px-3 py-2 bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                                <Text size="xm">
                                                                    Copiado
                                                                </Text>
                                                                <Popover.Arrow className="fill-gray-50" />
                                                            </Popover.Content>
                                                        </Popover.Portal>

                                                    </Popover.Root>
                                                </td>
                                                <td className="px-2 py-4">
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
                                                    <Menu as="div" className="relative w-fit mr-0 ml-auto">
                                                        <Menu.Button>
                                                            <Button className="hover:!bg-gray-200 !h-full !bg-transparent !p-1 !w-fit rounded-full "
                                                                title="Opções">
                                                                <DotsThreeOutlineVertical className="!text-gray-800 truncate ml-auto mr-0" size={32} />
                                                            </Button>
                                                        </Menu.Button>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >

                                                            <Menu.Items className={`absolute z-30 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-options">
                                                                <Menu.Item key={'editar'}>
                                                                    <div className="px-4 py-2 my-1 flex flex-col cursor-pointer">
                                                                        <Text className="text-sm text-gray-900 dark:text-white">
                                                                            Editar
                                                                        </Text>
                                                                    </div>
                                                                </Menu.Item>
                                                                <Menu.Item key={'delete'}>
                                                                    <div className="my-1 px-4 py-2 flex flex-col cursor-pointer">
                                                                        <Text className="text-sm text-gray-900 dark:text-white">
                                                                            Deletar
                                                                        </Text>
                                                                    </div>
                                                                </Menu.Item>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </td>
                                            </tr>
                                        </Card>
                                    )
                                })}
                            </tbody>
                        </table>

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