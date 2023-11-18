import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Heading } from './Heading';
import { Text } from './Text';
import { SidebarMenu } from './SidebarMenu';
import { List } from 'phosphor-react'
import { Button } from './Button';
import { Logo } from './Logo';

export interface NavbarProps {
    hasSide?: boolean;
}

export function Navbar({ hasSide = true }: NavbarProps) {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    var user = [
        { name: "teste", email: "Um teste" },
    ];

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center">
                        <Button className='py-0 px-0 !w-fit bg-transparent md:hidden hover:!bg-gray-200 dark:hover:bg-gray-700' onClick={toggleSidebar}>
                            <List size={32} className='text-gray-900 dark:text-gray-100' />
                        </Button>
                        <div className="flex items-center md:justify-start max-md:justify-center max-md:-translate-x-3 w-full">
                            <a href="/teste" className="flex items-center ml-2 md:mr-24 max-md:mr-10">
                                <Logo />
                                <Heading className='ml-3' size='lg'>GuaráRP</Heading>
                            </a>
                        </div>
                        <Menu as="div" className="relative ml-auto mr-0 w-10">
                            <div>
                                <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Abrir menu de usuário</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className={`absolute right-0 my-4 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                    {user.map((info) => (
                                        <Menu.Item key={info.name}>
                                            <div className="px-4 py-3 flex flex-col">
                                                <Text className="text-sm text-gray-900 dark:text-white">
                                                    {info.name}
                                                </Text>
                                                <Text className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                                                    {info.email}
                                                </Text>
                                            </div>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </nav>

            {hasSide ?
                <SidebarMenu sideBarVisible={isSidebarVisible} />
                :
                ''
            }
        </>
    )
}