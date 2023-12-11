import { useState, useEffect } from 'react'
import { TextInput } from './TextInput'
import { searchBankAccount } from '../services/BankAccount/apiService'
import { BankAccountResponse } from '../services/BankAccount/types'
import { Text } from './Text'

export interface DropdownInputProps {
  labelText: string
  labelFor: string
  placeholder?: string
  className?: string
  error?: string
  labelStyle?: string
  inputValue: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function DropdownInput({
  labelText,
  labelFor,
  placeholder = '',
  className = '',
  error,
  labelStyle = '',
  inputValue = '',
  onChange
}: DropdownInputProps) {
  const [selectedOption, setSelectedOption] =
    useState<BankAccountResponse | null>(null)
  const [dropdownOptions, setDropdownOptions] = useState<BankAccountResponse[]>(
    []
  )
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchBankAccount(inputValue)
        setDropdownOptions(response.data.content.slice(0, 3))
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [inputValue])

  const handleOptionClick = (option: BankAccountResponse) => {
    setShowDropdown(false)
    setSelectedOption(option)
    onChange({
      target: {
        value: option.id
      }
    } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <>
      <TextInput.Root
        labelFor={labelFor}
        labelText={labelText}
        className={className}
        labelStyle={labelStyle}
        error={error}
      >
        <TextInput.Input
          type="text"
          placeholder={placeholder}
          value={selectedOption?.name || inputValue}
          onChange={e => {
            setSelectedOption(null)
            onChange(e)
          }}
          onFocus={() => setShowDropdown(true)}
        />
      </TextInput.Root>
      {showDropdown && dropdownOptions.length > 0 && (
        <div className="relative bg-white border border-gray-300 shadow-md rounded mt-2">
          {dropdownOptions.map(option => (
            <div
              key={option.id}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              <Text className="text-gray-900">{option.name}</Text>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default DropdownInput
