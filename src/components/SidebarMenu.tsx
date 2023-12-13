import { CaretLeft, CaretRight } from 'phosphor-react'
import { ReactNode, useEffect, useState } from 'react'
import { Button } from './Button'
import ThemeToggle from './ThemeToggle'
import Accordion from './Accordion'
import { NavLink } from './NavLink'
import { Text } from './Text'
import { ModulePermission } from '../Routes'
import { checkPermission } from '../services/User/utils'

export interface MenuItemsProps {
  label: string
  subitens?: Array<ReactNode>
  necessaryPemission: string[]
}

export interface SidebarMenuProps {
  sideBarVisible?: boolean
}

export function SidebarMenu({ sideBarVisible = false }: SidebarMenuProps) {
  const menuItems: MenuItemsProps[] = [
    {
      label: 'RH',
      subitens: [
        <NavLink link="/empresas">
          <Text size="sm">Empresas</Text>
        </NavLink>,
        <NavLink link="/usuarios">
          <Text size="sm">Usuários</Text>
        </NavLink>,
        <NavLink link="/autoridades">
          <Text size="sm">Autoridades</Text>
        </NavLink>,
        <NavLink link="/cursos">
          <Text size="sm">Cursos</Text>
        </NavLink>,
        <NavLink link="/departamentos">
          <Text size="sm">Departamentos</Text>
        </NavLink>,
        <NavLink link="/cargos">
          <Text size="sm">Cargos</Text>
        </NavLink>
      ],
      necessaryPemission: [
        ModulePermission.CAN_VIEW_ON_GLOBAL,
        ModulePermission.CAN_VIEW_ON_RH
      ]
    },

    {
      label: 'Almoxarifado',
      subitens: [
        <NavLink key="item-1" link="/almoxarifado">
          <Text size="sm">Produtos</Text>
        </NavLink>
      ],
      necessaryPemission: [
        ModulePermission.CAN_VIEW_ON_GLOBAL,
        ModulePermission.CAN_VIEW_ON_ALMOXARIFADO
      ]
    },

    {
      label: 'Projetos',
      subitens: [
        <NavLink key="item-1" link="/projetos">
          <Text size="sm">Projetos</Text>
        </NavLink>,
        <NavLink key="item-1" link="/ofertas">
          <Text size="sm">Ofertas</Text>
        </NavLink>
      ],
      necessaryPemission: [
        ModulePermission.CAN_VIEW_ON_GLOBAL,
        ModulePermission.CAN_VIEW_ON_PROJETO
      ]
    },

    {
      label: 'Financeiro',
      subitens: [
        <NavLink key="item-1" link="/transacoes">
          <Text size="sm">Transações</Text>
        </NavLink>,
        <NavLink key="item-1" link="/bancos">
          <Text size="sm">Bancos</Text>
        </NavLink>
      ],
      necessaryPemission: [
        ModulePermission.CAN_VIEW_ON_GLOBAL,
        ModulePermission.CAN_VIEW_ON_FINANCEIRO
      ]
    },

    {
      label: 'Documentos',
      subitens: [
        <NavLink key="item-1" link="/documentos">
          <Text size="sm">Documentos</Text>
        </NavLink>
      ],
      necessaryPemission: [
        ModulePermission.CAN_VIEW_ON_GLOBAL,
        ModulePermission.CAN_WRITE_ON_ADMINISTRATIVO
      ]
    }
  ]

  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  useEffect(() => {
    setSidebarVisible(sideBarVisible)
  }, [sideBarVisible])

  const sidebarClasses = isSidebarVisible
    ? 'w-64 transition-all ease-in-out duration-200'
    : 'w-0 transition-all ease-in-out duration-200'

  return (
    <div className="flex h-screen overflow-y-auto fixed z-40">
      <aside
        className={` bg-gray-100 dark:bg-gray-800 ${sidebarClasses} md:border-r-4 border-r-gray-200/20 dark:border-r-gray-800/20`}
      >
        <div className="flex flex-col h-full">
          <nav
            className={`h-full mb-44 px-4 py-4 overflow-x-hidden ${
              !isSidebarVisible ? 'overflow-y-hidden' : 'overflow-y-auto'
            }`}
          >
            <Accordion
              className={`${!isSidebarVisible ? 'hidden' : ''}`}
              items={menuItems.filter(item =>
                checkPermission(item.necessaryPemission)
              )}
            />
            <div
              className={`fixed bottom-3 w-52 ${
                !isSidebarVisible ? 'hidden' : ''
              }`}
            >
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex items-center max-md:hidden">
        <div onClick={toggleSidebar}>
          <Button
            icon={
              isSidebarVisible ? (
                <CaretLeft
                  size={32}
                  className="text-gray-900 dark:text-gray-100"
                />
              ) : (
                <CaretRight
                  size={32}
                  className="text-gray-900 dark:text-gray-100"
                />
              )
            }
            className="border-r-gray-200/20 bg-gray-200 hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-600 rounded-l-none focus:ring-0 "
          ></Button>
        </div>
      </div>
    </div>
  )
}
