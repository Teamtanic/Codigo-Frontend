import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Heading } from "./Heading";


export interface ModelModalProp {
    action?: string | 'Adicionar';
    triggerStyle?: string;
    optionsTrigger?: boolean | false;
    title: string;
}

interface CardModalProps {
    children: ReactNode;
    title?: string;
    action?: string;
    triggerStyle?: string;
    optionsTrigger?: boolean;
}

export const CardModal = ({ children, title, action, triggerStyle, optionsTrigger }: CardModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)} 
        >
            <Dialog.Trigger asChild >
                <Button 
                className={`${optionsTrigger ?'!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal ' 
            : "!w-fit inline-flex items-center justify-center px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] fixed bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] focus:shadow-black focus:outline-none" }
                 ${triggerStyle}  text-gray-100 dark:text-gray-100 `}>
                    {action ? action : "Abrir"}
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal  >
                <Dialog.Overlay className="bg-black/60 inset-0 z-[60] fixed" />
                <Dialog.Content className="max-h-[90%] overflow-y-auto fixed bg-gray-100 z-[70] 
                dark:bg-gray-800 pt-8 pb-2 text-white top-1/2 left-1/2 -translate-x-1/2 
                -translate-y-1/2 rounded-lg sm:w-[30em] md:w-[40em] lg:w-[60em] 
                xl:w-[70em] shadow-lg shadow-black/25 "
                >
                    <Dialog.Title className="px-10 w-full flex justify-center">
                        <Heading size="lg">{title}</Heading>
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col gap-4">
                        {children}

                        <footer className="flex flex-col w-full max-md:px-12 md:px-24 gap-4 -translate-y-6">
                            <Dialog.Close className="bg-zinc-500 px-5 h-12 w-fit rounded-md font-semibold hover:bg-zinc-600 sm:text-[12px] mr-16"
                                >
                                <Text className="text-gray-100" size="sm">Cancelar</Text>
                            </Dialog.Close>
                        </footer>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};