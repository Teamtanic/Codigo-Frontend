import { DotsThreeOutlineVertical } from "phosphor-react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Fragment } from "react";
import { MagnifyingGlass } from 'phosphor-react';
import { Menu, Transition } from "@headlessui/react";
import { CardModal } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";

interface CompanyProps {
    id: string,
    nome: string,
    relacao: string,
    codigo: string
}

export function ListProductsWarehouse() {

    var warehouse = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", product: "Cadeira", quantity: 12 },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", product: "Mesa", quantity: 9 },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", product: "Computador", quantity: 11 },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", product: "Estabilizador", quantity: 15 },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", product: "HDMI", quantity: 5 },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", product: "Monitor", quantity: 17 },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", product: "VGA", quantity: 46 },
    ];

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
                                            <Heading className="!text-gray-800">Produto</Heading>
                                        </th>
                                        <th className="px-4 w-96 max-md:rounded-r-2xl">
                                            <Heading className="!text-gray-800">Quantidade</Heading>
                                        </th>
                                        <th className="px-4 max-md:hidden rounded-r-2xl">
                                        </th>
                                    </tr>
                                </Card>
                            </thead>

                            <tbody>
                                {warehouse.map(product => {
                                    return (
                                        <Card asChild key={product.id} className="cursor-pointer hover:bg-gray-400 
                                        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                            <tr className="h-16 dark:border-gray-700">
                                                <td className="px-2 py-4 rounded-l-xl">
                                                    <Text className="!text-gray-800 max-h-10 truncate font-semibold">{product.product}</Text>
                                                </td>
                                                <td className="px-2 py-4 max-md:rounded-r-xl">
                                                    <Text className="!text-gray-800 max-h-10 truncate font-semibold">{product.quantity} {product.quantity === 1 ? 'unidade' : 'unidades'}</Text>
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
                                                                    <div className="px-4 py-2 my-1 flex flex-col cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600">
                                                                        <Text className="text-sm text-gray-900 dark:text-white">
                                                                            Editar
                                                                        </Text>
                                                                    </div>
                                                                </Menu.Item>
                                                                <Menu.Item key={'delete'}>
                                                                    <div className="my-1 px-4 py-2 flex flex-col cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600">
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