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
}

export const CardModal = ({ children, title, onConfirm, action }: CardModalProps) => {
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
                <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    {action ? action : "Abrir"}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal >
                <Dialog.Overlay className="bg-black/60 inset-0 z-[60] fixed" />
                <Dialog.Content className="fixed bg-gray-100 z-[70] dark:bg-gray-800 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg sm:w-[30em] md:w-[40em] lg:w-[60em] xl:w-[70em] shadow-lg shadow-black/25 ">
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
                                    <Button className="rounded-md" textSize="sm" textStyle="text-gray-100" onClick={handleConfirm} disabled={isSubmitting}>
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