import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextInput } from './TextInput'

export interface DropdownInputProps {
  labelText?: string
  labelFor?: string
  className?: string
  labelStyle?: string
}

function DropdownInput({
  labelText,
  labelFor,
  className = '',
  labelStyle = ''
}: DropdownInputProps) {
  const [inputValue, setInputValue] = useState('')
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([])

  useEffect(() => {
    // Função para buscar dados do servidor usando Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('/bancos', {
          params: { searchTerm: inputValue }
        })
        setDropdownOptions(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    // Chama a função para buscar dados sempre que o valor do input muda
    fetchData()
  }, [inputValue])

  return (
    <TextInput.Root
      labelFor={labelFor}
      labelText={labelText}
      className={className}
      labelStyle={labelStyle}
    >
      <div className="relative">
        <TextInput.Input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        {dropdownOptions.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md rounded mt-2">
            {dropdownOptions.map(option => (
              <div
                key={option}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => setInputValue(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </TextInput.Root>
  )
}

export default DropdownInput
