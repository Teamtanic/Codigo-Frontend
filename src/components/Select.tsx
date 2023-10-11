import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ChangeEvent, ChangeEventHandler, SelectHTMLAttributes, useState } from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    placeHolder: string;
    options: SelectOption[];
    selectedValue?: string;
    onChange?: (value: string) => void;
    asChild?: boolean;
    className?: string;
}

export function Select({
    options,
    placeHolder,
    selectedValue: propSelectedValue,
    onChange,
    asChild,
    className,
}: SelectProps) {
    const Component = asChild ? Slot : "select";

    // Estado local para controlar o valor selecionado
    const [selectedValue, setSelectedValue] = useState(propSelectedValue);

    // Função de retorno de chamada para lidar com alterações no valor selecionado
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);

        // Chame a função de retorno de chamada (se fornecida) para notificar sobre a alteração
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleSelectOption = (e: string) => {
        const newValue = e;
        setSelectedValue(newValue);
    };

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    console.log(selectedValue);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedValue == undefined ? placeHolder : selectedValue}
                    <CaretDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
               
                    <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {options.map((option) => (
                        <Menu.Item key={option.value}>
                            {({ active }) => (
                                <a
                                
                                className={classNames(
                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                    "block px-4 py-2 text-sm rounded-md"
                                )}
                                    onClick={() => handleSelectOption(option.label)}
                                    >
                                    {option.label}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                    </Menu.Items>
               
            </Transition>
        </Menu>
    );

    /*
        return (
            <Component
                className={clsx(
                    "font-poppins py-3 px-4 bg-emerald-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-emerald-400 focus:ring-2 ring-white",
                    className
                    )}
                    value={selectedValue}
                    onChange={handleSelectChange}
                    >
                {options.map((option) => (
                    <option className="rounded-sm" key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </Component>
      );
    */
}
