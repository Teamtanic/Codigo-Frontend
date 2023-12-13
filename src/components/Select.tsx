import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Text } from './Text'
import { FieldInputProps } from 'react-final-form'
import { Check } from 'phosphor-react'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends FieldInputProps<any> {
  placeHolder: string
  options: SelectOption[]
  asChild?: boolean
  className?: string
  error?: string | undefined
  labelFor?: string
  labelText?: string
  labelStyle?: string
  multiple?: boolean
}

export function Select({
  options,
  placeHolder,
  labelFor,
  error,
  labelText,
  labelStyle,
  multiple,
  ...props
}: SelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([])

  const handleOptionClick = (option: SelectOption) => {
    if (multiple) {
      const isSelected = selectedOptions.some(
        selectedOption => selectedOption.value === option.value
      )
      const updatedOptions = isSelected
        ? selectedOptions.filter(
            selectedOption => selectedOption.value !== option.value
          )
        : [...selectedOptions, option]

      setSelectedOptions(updatedOptions)
      props.onChange(updatedOptions.map(selected => selected.value))
    } else {
      setSelectedOptions([option])
      props.onChange(option.value)
    }
  }

  return (
    <Listbox as="div" className="relative inline-block text-left w-full">
      <div className="flex flex-col w-full">
        <div className="flex gap-4">
          <Text className={`${labelStyle}`}>{labelText}</Text>
          <Text size="xm" className="text-red-600">
            {error}
          </Text>
        </div>
        <Listbox.Button className="inline-flex w-full h-12 items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {multiple
            ? selectedOptions.length === 0
              ? placeHolder
              : selectedOptions.map(option => option.label).join(', ')
            : selectedOptions.length === 0
            ? placeHolder
            : selectedOptions[0].label}
        </Listbox.Button>
      </div>

      <Listbox.Options className="absolute z-[96] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {options.map(option => (
          <Listbox.Option key={option.value} value={option} disabled={false}>
            {({ active }) => (
              <div
                className={`${
                  active ? 'bg-gray-100' : ''
                } text-gray-900 block px-4 py-2 text-sm rounded-md flex items-center justify-between`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
                {multiple &&
                  selectedOptions.some(
                    selected => selected.value === option.value
                  ) && <Check size={32} weight="bold" />}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
