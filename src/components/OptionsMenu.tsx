import { Button } from './Button'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CardModal } from './CardModal'
import { Text } from './Text'

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

          <CardModal
            optionsTrigger
            title="Deletar"
            action="Deletar"
            triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal"
          >
            <div className="flex flex-col items-center w-full max-md:px-12 md:px-24 mb-6 gap-4">
              <div>
                <Text>Você tem certeza que deseja excluir este item?</Text>
              </div>
              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-16 ml-auto mr-0 bg-red-700 hover:bg-red-600`}
                textSize="sm"
                textStyle="text-gray-100"
                onClick={onDelete}
              >
                Deletar
              </Button>
            </div>
          </CardModal>
          <DropdownMenu.Arrow className="fill-gray-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
