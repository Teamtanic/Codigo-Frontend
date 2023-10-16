import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Heading } from './Heading';
import { Text } from './Text';

export interface NavbarProps {
    //user: UserProps (criar UserProps)
}

export function Navbar({}:NavbarProps){
    var user = [
        {name: "teste", email: "Um teste"},
    ];
      
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                    <a href="/teste" className="flex ml-2 md:mr-24">
                        <img src="/guara-logo.png" className="h-16 mr-3" alt="Guará Junior Logo" />
                        <Heading size='lg'>GuaráRP</Heading>
                    </a>
                    </div>
                    <Menu as="div" className="relative">
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
    )
}