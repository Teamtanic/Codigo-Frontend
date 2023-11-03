import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
}

export function Card({children, className, asChild}:CardProps){
    const Component = asChild ? Slot : "div";

    return(
        <Component className={clsx("bg-zinc-100 w-fit h-fit rounded-xl p-2 overflow-hidden", className)}>
            {children}
        </Component>
    )
}