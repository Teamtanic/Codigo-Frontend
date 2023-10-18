import { Link } from "react-router-dom"; // Importe o Link para criar links internos da sua aplicação
import { Text } from "./Text";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Card } from "./Card";
import { useState } from "react";

export interface SidebarMenuProps {
  // Defina as propriedades necessárias, como os itens do menu
  menuItems: Array<{ label: string; link: string, notify?: number; }>;
}

export function SidebarMenu({ menuItems }: SidebarMenuProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const sidebarClasses = isSidebarVisible
    ? 'w-64 transition-all ease-in-out duration-200'
    : 'w-0 transition-all ease-in-out duration-200';

  return (
    <div className="flex h-screen fixed overflow-y-auto">
      <aside className={`bg-gray-800 ${sidebarClasses} border-r-4 border-r-gray-800/20`}>
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

      <div className="flex items-center">
        <Card className="flex items-center rounded-l-none bg-gray-700">
          <button >
            {isSidebarVisible ?
              <CaretLeft size={32} onClick={toggleSidebar} />
              :
              <CaretRight size={32} onClick={toggleSidebar} />
            }
          </button>
        </Card>
      </div>
    </div>
  );
}
