import { Button } from './Button'
import { CardModal } from './CardModal'
import { Text } from './Text'

interface CardDeleteProps {
  onDelete?: (record: any) => void
  iconTrigger?: React.ReactNode
  triggerStyle?: string
}

export function CardDelete({
  onDelete,
  iconTrigger,
  triggerStyle
}: CardDeleteProps) {
  return (
    <CardModal
      optionsTrigger
      title="Deletar"
      action="Deletar"
      iconTrigger={iconTrigger}
      triggerStyle={
        triggerStyle ??
        `!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal `
      }
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
  )
}
