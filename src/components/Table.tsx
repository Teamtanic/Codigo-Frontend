import { Menu, Transition } from "@headlessui/react"
import { Card } from "./Card"
import { Heading } from "./Heading"
import { Text } from "./Text"
import { Button } from "./Button"
import { DotsThreeOutlineVertical } from "phosphor-react"
import React, { Fragment, useState } from "react"
import * as Popover from '@radix-ui/react-popover';
import { formatUUID } from "../utils"

export interface Column {
    key: string;
    heading: string;
    width?: string;
    copiableId?: boolean;
    card?: boolean;
    cardStyle?: string | ((row: Record<string, any>) => string);
    textStyle?: string;
}

export interface TableProps {
    data: Record<string, any>[];
    columns: Column[];
}

export interface DataProps {
    data: Record<string, any>[];
}


export function Table({ data, columns }: TableProps) {

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
        <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4 ">
                <thead >

                    <Card asChild  >
                        <tr className="w-full py-3 text-left dark:border-gray-700 ">
                            {columns.map((column, index) => (
                                <th
                                    key={column.key}
                                    className={`py-3 px-4 rounded-bl-none ${index == 0 ? 'rounded-tl-2xl' : ''}  items-center
                            ${index === columns.length - 1 ? 'max-md:rounded-r-2xl' : 'border-r-4 border-gray-700'}`}
                                >
                                    <Heading className="!text-gray-800">{column.heading}</Heading>
                                </th>
                            ))}
                            <th className="px-4 max-md:hidden rounded-r-2xl">
                            </th>
                        </tr>
                    </Card>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <Card asChild key={item.id} className="cursor-pointer hover:bg-gray-400 
                    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <tr className="h-16 dark:border-gray-700">
                                {columns.map((column, index) => (
                                    <td
                                        key={column.key}
                                        className={`px-2 max-w-[220px] truncate ${column.copiableId === true ? 'w-32 py-2' : 'py-4 '} ${index === 0 ? 'rounded-l-xl' : ''} ${column.width ? `max-md:w-${column.width}` : ''}
                                ${index === columns.length - 1 ? 'max-md:rounded-r-xl' : ''}`}
                                    >
                                        {column.copiableId === true ?
                                            <Popover.Root open={openMenus.includes(item.id)}>
                                                <Popover.Trigger >
                                                    <Button className="bg-transparent !px-1 !justify-start hover:bg-gray-200" title='Clique para copiar' textSize="xm" textStyle="!text-gray-800 truncate font-semibold"
                                                        onClick={(event) => {
                                                            copyText(event, item.id);
                                                        }}>
                                                        {formatUUID(item.id)}
                                                    </Button>
                                                </Popover.Trigger>

                                                <Popover.Portal>

                                                    <Popover.Content className="h-fit w-fit px-3 py-2 bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                        <Text size="xm" className="!text-gray-900">
                                                            Copiado
                                                        </Text>
                                                        <Popover.Arrow className="fill-gray-50" />
                                                    </Popover.Content>
                                                </Popover.Portal>

                                            </Popover.Root>
                                            : column.card ?
                                                <Card className={
                                                    `${column.card ?
                                                        (typeof column.cardStyle === 'function' ? column.cardStyle(item) : column.cardStyle)
                                                        : ''} bg-blue-200`
                                                }>
                                                    <Text className={`text-gray-800 ${column.textStyle ? column.textStyle : ''} max-h-10 truncate font-semibold`}>
                                                        {item[column.key]}
                                                    </Text>
                                                </Card>
                                                :
                                                <Text className={`text-gray-800 ${column.textStyle ? column.textStyle : ''} max-h-10 truncate font-semibold`}>
                                                    {item[column.key]}
                                                </Text>
                                        }
                                    </td>
                                ))}
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
                    ))}
                </tbody>
            </table>
        </div>
    )
}