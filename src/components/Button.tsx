import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Text } from './Text'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  asChild?: boolean
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  textStyle?: string
  textSize?: 'xm' | 'sm' | 'md'
}

export function Button({
  children,
  asChild,
  iconPosition = 'left', // Posição padrão do ícone é à esquerda
  icon,
  textStyle,
  textSize,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  const iconSlot = icon && (
    <span className="w-6 h-6 text-gray-900 -translate-y-1">{icon}</span>
  )

  return (
    <Component
      className={clsx(
        'flex items-center justify-center py-3 px-4 bg-emerald-500 rounded font-semibold text-gray-900 text-sm transition-colors hover:bg-emerald-400 focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {iconPosition === 'left' && iconSlot}
      <Text
        size={textSize}
        className={`text-center flex-1 ${
          icon && iconPosition === 'left'
            ? '-translate-x-3'
            : iconPosition === 'right'
            ? 'translate-x-3'
            : ''
        } ${textStyle}`}
      >
        {children}
      </Text>
      {iconPosition === 'right' && iconSlot}
    </Component>
  )
}
