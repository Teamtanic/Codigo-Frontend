import { Menu, Transition } from "@headlessui/react";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { DotsThreeOutlineVertical } from "phosphor-react";
import { Fragment } from "react";

export function DetailsDepartment() {
    var department =
    {
        id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'Financeiro',
        employees: [
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
        ]
    };

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Detalhes Departamento</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{department.name}</Text>
                            </div>

                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                            <div>
                                <Text className="!text-gray-900 font-semibold">Total de funcionários: </Text>
                                <Text className="!text-gray-900">{department.employees.length}</Text>
                            </div>

                        </div>
                    </div>
                </Card>

                <div className="mt-10 overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-4 ">
                        <thead >
                            <Card asChild  >
                                <tr className="w-full py-3 text-left dark:border-gray-700 ">
                                    <th className="py-3 px-4 rounded-bl-none rounded-tl-2xl items-center border-r-4 border-gray-700">
                                        <Heading className="!text-gray-800">Nome</Heading>
                                    </th>
                                    <th className="px-4 w-96 border-r-4 border-gray-700">
                                        <Heading className="!text-gray-800">Departamento</Heading>
                                    </th>
                                    <th className="px-4 w-96 max-md:rounded-r-2xl">
                                        <Heading className="!text-gray-800">Cargo</Heading>
                                    </th>
                                    <th className="px-4 max-md:hidden rounded-r-2xl">
                                    </th>
                                </tr>
                            </Card>
                        </thead>

                        <tbody>
                            {department.employees.map(employee => {
                                return (
                                    <Card asChild key={employee.id} className="cursor-pointer hover:bg-gray-400 
                                        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                        <tr className="h-16 dark:border-gray-700">
                                            <td className="px-2 py-4 rounded-l-xl max-w-[220px] truncate">
                                                <Text className="!text-gray-800 max-h-10 truncate font-semibold">{employee.name}</Text>
                                            </td>
                                            <td className="px-2 py-4 ">
                                                <Text className="!text-gray-800 max-h-10 truncate font-semibold">{employee.department}</Text>
                                            </td>
                                            <td className="px-2 py-4 max-md:rounded-r-xl">
                                                <Text className="!text-gray-800 max-h-10 truncate font-semibold">{employee.role}</Text>
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
                </div>
            </div>
        </Container>
    )
}