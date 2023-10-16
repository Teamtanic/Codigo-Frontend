import { ReactNode } from "react"
import { clsx } from "clsx";

export interface ContainerProps{
    children: ReactNode;
    hasNav?: boolean;
    className?: string;
}

export function Container ({children, hasNav = true, className}:ContainerProps) {
    return (
        <div className={clsx(`flex h-full w-full ${hasNav ? "mt-20 pt-2" : ""}`, className)}>
            {children}
        </div>
    )
}