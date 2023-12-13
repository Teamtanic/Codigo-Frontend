import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Text } from './Text'
import InputMask from 'react-input-mask'

export interface TextInputRootProps {
  labelText?: string
  labelFor?: string
  children: ReactNode
  className?: string
  labelStyle?: string
  error?: string | undefined
  disabled?: boolean
}

function TextInputRoot({
  children,
  labelFor,
  labelText,
  error,
  disabled,
  className = '',
  labelStyle = ''
}: TextInputRootProps) {
  return (
    <label htmlFor={labelFor} className="flex flex-col w-full">
      <div className="flex gap-4">
        <Text className={`${labelStyle}`}>{labelText}</Text>
        <Text size="xm" className="text-red-600">
          {error}
        </Text>
      </div>
      <div
        className={`font-poppins ${className} py-4 px-3 h-12 rounded bg-gray-200  w-full focus-within:ring-2 ring-emerald-800 flex items-center gap-3 ${
          disabled ? '!bg-gray-400' : ''
        }`}
      >
        {children}
      </div>
    </label>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <>
      <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
    </>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string
}

function TextInputInput({ mask, ...props }: TextInputInputProps) {
  if (mask) {
    return (
      <InputMask
        mask={mask}
        className="bg-transparent flex-1 text-gray-900 outline-none text-xs placeholder:text-gray-400"
        {...props}
      />
    )
  }

  return (
    <input
      className="bg-transparent flex-1 text-gray-900 outline-none text-xs placeholder:text-gray-400"
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
