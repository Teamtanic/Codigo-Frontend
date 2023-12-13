import { Button } from './Button'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CardDelete } from './CardDelete'

export interface OptionsMenu {
  options: ModalOptions[]
}

export interface OptionsMenuProps extends OptionsMenu {
  onDelete?: () => void
}

export interface ModalOptions {
  key: string
  children: React.ReactElement<{ data: any }>
}

export const OptionsMenu = ({
  options,
  onDelete,
  data
}: OptionsMenuProps & { data: any }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          className="hover:!bg-gray-200 !h-full !bg-transparent !p-1 !w-fit rounded-full"
          title="Opções"
        >
          <DotsThreeOutlineVertical
            className="!text-gray-800 truncate ml-auto mr-0"
            size={32}
          />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className=" z-30 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ">
          {options.map(option => {
            if (React.isValidElement(option.children)) {
              return React.cloneElement(option.children, { data: data })
            }
            return option.children
          })}

          <CardDelete onDelete={onDelete} />
          <DropdownMenu.Arrow className="fill-gray-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
