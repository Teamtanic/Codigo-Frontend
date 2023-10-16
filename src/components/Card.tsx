import { clsx } from "clsx";
import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({children, className}:CardProps){

    return(
        <div className={clsx("bg-zinc-100 w-fit h-fit rounded-xl p-2", className)}>
            {children}
        </div>
    )
}