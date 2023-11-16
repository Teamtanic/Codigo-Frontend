import { ReactNode } from "react"
import { clsx } from "clsx";

export interface ContainerProps{
    children: ReactNode;
    hasNav?: boolean;
    className?: string;
}

export function Container ({children, hasNav = true, className}:ContainerProps) {
    return (
        <div className={clsx(`flex min-h-full h-auto w-full bg-gray-200 dark:bg-gray-700 ${hasNav ? "md:mt-20 pt-2 max-md:mt-14" : ""}`, className)}>
            {children}
        </div>
    )
}