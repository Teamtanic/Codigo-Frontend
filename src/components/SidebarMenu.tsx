import { Link } from "react-router-dom"; // Importe o Link para criar links internos da sua aplicação
import { Text } from "./Text";

export interface SidebarMenuProps {
  // Defina as propriedades necessárias, como os itens do menu
  menuItems: Array<{ label: string; link: string, notify?: number; }>;
}

export function SidebarMenu({ menuItems }: SidebarMenuProps) {
  return (
    <aside className="bg-gray-800 w-64 h-screen fixed overflow-y-auto">
      <div className="flex flex-col h-full">
        <nav className="flex-1 space-y-2 px-4 py-4">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
                <Text className="flex-1 ml-3 whitespace-nowrap">{item.label}</Text>
                {
                    item.notify ? <Text className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-emerald-800 bg-green-300 rounded-full dark:bg-green-500 dark:text-emerald-900">{item.notify}</Text> : ""
                }
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
