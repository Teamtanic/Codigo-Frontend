import { Link } from "react-router-dom"; // Importe o Link para criar links internos da sua aplicação
import { Text } from "./Text";
import { CaretLeft, CaretRight, Moon } from "phosphor-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import ThemeToggle from "./ThemeToggle";

export interface SidebarMenuProps {
  sideBarVisible?: boolean;
  menuItems: Array<{ label: string; link: string, notify?: number; }>;
}

export function SidebarMenu({ menuItems, sideBarVisible = false }: SidebarMenuProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    setSidebarVisible(sideBarVisible);
  }, [sideBarVisible]);

  const sidebarClasses = isSidebarVisible
    ? 'w-64 transition-all ease-in-out duration-200'
    : 'w-0 transition-all ease-in-out duration-200';

  return (
    <div className="flex h-screen fixed overflow-y-auto z-40">
      <aside className={` bg-gray-100 dark:bg-gray-800 ${sidebarClasses} md:border-r-4 border-r-gray-200/20 dark:border-r-gray-800/20`}>
        <div className="flex flex-col h-full">
          <nav className={`h-full mb-44 px-4 py-4 overflow-x-hidden ${!isSidebarVisible ? "overflow-y-hidden" : "overflow-y-scroll"}`}>
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${!isSidebarVisible ? "hidden" : ""
                  }`}
              >
                <Text className="flex-1 ml-3 whitespace-nowrap">{item.label}</Text>
                {
                  item.notify ? <Text className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-emerald-800 bg-green-300 rounded-full dark:bg-green-500 dark:text-emerald-900">{item.notify}</Text> : ""
                }
              </Link>
            ))}
            <div className={`fixed bottom-3 w-52 ${!isSidebarVisible ? "hidden" : ""}`}>

              <ThemeToggle />
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex items-center max-md:hidden" >
        <div onClick={toggleSidebar}>
          <Button icon={isSidebarVisible ?
            <CaretLeft size={32} className="text-gray-900 dark:text-gray-100" />
            :
            <CaretRight size={32} className="text-gray-900 dark:text-gray-100" />
          } className="border-r-gray-200/20 bg-gray-200 hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-600 rounded-l-none focus:ring-0 ">
          </Button>
        </div>
      </div>
    </div>
  );
}
