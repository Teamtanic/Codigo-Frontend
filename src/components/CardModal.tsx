import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Heading } from "./Heading";

interface CardModalProps {
    children: ReactNode,
    title?: string,
    action?: string,
    onConfirm?: () => Promise<void>;
    triggerStyle?: string;
    buttonStyle?: string;
}

export const CardModal = ({ children, title, onConfirm, action, triggerStyle, buttonStyle }: CardModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleConfirm = async () => {
        setIsSubmitting(true);

        try {
            onConfirm ? await onConfirm() : ""; // Chama a função de chamada da API
            setIsOpen(false);
        } catch (error) {
            console.error("Erro na chamada da API", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}
        >
            <Dialog.Trigger asChild>
                <Button className={`!w-fit inline-flex items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none ${triggerStyle} text-gray-100 dark:text-gray-100 `}>
                    {action ? action : "Abrir"}
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal >
                <Dialog.Overlay className="bg-black/60 inset-0 z-[60] fixed" />
                <Dialog.Content className="max-h-[90%] overflow-y-auto fixed bg-gray-100 z-[70] dark:bg-gray-800 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg sm:w-[30em] md:w-[40em] lg:w-[60em] xl:w-[70em] shadow-lg shadow-black/25 ">
                    <Dialog.Title className="px-10 w-full flex justify-center">
                        <Heading size="lg">{title}</Heading>
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col gap-4">
                        {children}

                        <footer className="mt-2 flex justify-center gap-4 px-10">
                            <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 sm:text-[12px] mr-16">
                                <Text className="text-gray-100" size="sm">Cancelar</Text>
                            </Dialog.Close>
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Button className={`rounded-md ${buttonStyle}`} textSize="sm" textStyle="text-gray-100" onClick={handleConfirm} disabled={isSubmitting}>
                                        {isSubmitting ? "Enviando..." : action ? action : "Confirmar"}
                                    </Button>
                                </Dialog.Trigger>
                            </Dialog.Root>
                        </footer>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};