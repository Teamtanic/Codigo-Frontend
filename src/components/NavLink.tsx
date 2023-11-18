import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface NavLinkProps {
    link: string,

    children: ReactNode,
}

export function NavLink({ link, children }: NavLinkProps) {
    return (
        <Link
            to={link}

            className={`flex items-center p-2 px-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                }`}
        >
            {children}
        </Link>
    )
}