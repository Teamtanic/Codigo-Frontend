import { Button } from "./Button";
import { Text } from "./Text";
import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { formatUUID } from "../utils";

interface CopiableTextProps {
    text: string;
    id?: boolean;
} 


export function CopiableText({ text, id } : CopiableTextProps) {
    const [isOpen, setIsOpen] = useState(false);

    const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

    function copyText(event: React.MouseEvent<HTMLElement>, id: string) {
        const { target } = event;

        if (target instanceof HTMLElement) {
            const textToCopy = id;

            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy);

                // Abra o menu para o elemento clicado
                setIsOpen(true);

                if (timeoutId.current) {
                    clearTimeout(timeoutId.current);
                }

                // Defina um temporizador para fechar o menu
                timeoutId.current = setTimeout(() => {
                    setIsOpen(false);
                }, 2500);
            }
        }
    }

    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger >
                <Button className="!w-fit bg-transparent !px-1 !justify-start hover:bg-gray-200" title='Clique para copiar' textSize="xm" textStyle="!text-gray-800 truncate font-semibold"
                    onClick={(event) => {
                        copyText(event, text);
                    }}>
                    <Text className="!text-gray-900">{id ? formatUUID(text) : text}</Text>
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
    )
}