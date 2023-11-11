import { Menu, Transition } from "@headlessui/react"
import { Button } from "./Button"
import { DotsThreeOutlineVertical } from "phosphor-react"
import { Text } from "./Text"
import React, { Fragment } from "react"
import { CardModal } from "./CardModal"
import { TextInput } from "./TextInput"
import { Checkbox } from "./Checkbox"

export interface OptionsMenu {
    options: ModalOptions[];
}

export interface ModalOptions {
    key: string;
    children: React.ReactNode;
}

export function OptionsMenu({ options }: OptionsMenu) {

    return (
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
                    {options.map(option => {
                        return (
                            <Menu.Item key={option.key}>
                                {option.children}
                            </Menu.Item>
                        )
                    })}

                    <Menu.Item key={'delete'}>
                        <CardModal title="Deletar" action="Deletar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !text-gray-100 !font-normal">
                            <div className="flex flex-col items-center w-full max-md:px-12 md:px-24 mb-6 gap-4">
                                <div>
                                    <Text>Você tem certeza que deseja excluir este item?</Text>
                                </div>
                            </div>
                        </CardModal>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}