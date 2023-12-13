import { useState, useEffect } from 'react'
import { Combobox } from '@headlessui/react'
import { Text } from './Text'

interface ComboboxProps {
  labelFor?: string
  labelText?: string
  labelStyle?: string
  error?: string | undefined
  inputValue?: Record | null
  placeholder?: string
  onChange: (record: Record | null) => void
  searchFunction: (query: string) => Promise<{ data: { content: Record[] } }>
  disabled?: boolean
}

export interface Record {
  value: string
  label: string
}

export default function DropdownInput({
  labelFor,
  labelText,
  labelStyle,
  error,
  inputValue,
  placeholder,
  onChange,
  disabled = false,
  searchFunction
}: ComboboxProps) {
  const [query, setQuery] = useState('')
  const [selectedRecord, setSelectedRecord] = useState<any>(inputValue)
  const [records, setRecords] = useState<Record[]>([])

  const fetchData = async (query: string) => {
    try {
      const response = await searchFunction(query)
      setRecords(response.data.content.slice(0, 3))
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }

  useEffect(() => {
    if (query !== '') {
      fetchData(query)
    }
  }, [query, searchFunction])

  const filteredRecords =
    query === ''
      ? records
      : records.filter(record => {
          return record.label.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <label htmlFor={labelFor} className="flex flex-col w-full">
      <div className="flex gap-4">
        <Text className={`${labelStyle}`}>{labelText}</Text>
        <Text size="xm" className="text-red-600">
          {error}
        </Text>
      </div>
      <div
        className={`font-poppins py-4 px-3 h-12 rounded bg-gray-200 w-full focus-within:ring-2 ring-emerald-800 flex items-center gap-3 ${
          disabled ? 'bg-gray-400' : ''
        }`}
      >
        <Combobox
          value={selectedRecord}
          by="id"
          onChange={onChange}
          disabled={disabled}
        >
          <Combobox.Input
            placeholder={placeholder}
            className={`text-gray-900 w-full bg-gray-200 outline-none ${
              disabled ? 'bg-gray-400' : ''
            }`}
            onChange={event => setQuery(event.target.value)}
            displayValue={record => record.label}
          />
          <Combobox.Options
            className={'w-full bg-gray-100 rounded text-gray-900 '}
          >
            {filteredRecords.map(record => (
              <Combobox.Option
                className={
                  'hover:bg-gray-300 rounded overflow-hidden hover:cursor-pointer px-6 py-2 '
                }
                key={record.value}
                value={record.value}
                onClick={() => setSelectedRecord(record)}
              >
                {record.label}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </label>
  )
}
