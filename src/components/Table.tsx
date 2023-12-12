import { Card } from './Card'
import { Text } from './Text'
import { Heading } from './Heading'
import { ModalOptions, OptionsMenu } from './OptionsMenu'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export interface Column<Data> {
  key: string
  subkey?: string
  title: string
  dataIndex?: keyof Data
  render?: (record: Data) => React.ReactNode
  width?: string
}

interface TableProps<Data extends { id: string }> {
  columns: Column<Data>[]
  data: Data[]
  menu?: boolean
  options?: ModalOptions[]
  link?: string
  onDelete?: (record: Data) => void
}

export function Table<Data extends { id: string }>({
  data,
  columns,
  menu = true,
  options,
  link,
  onDelete
}: TableProps<Data>) {
  let navigate = useNavigate()

  const handleNavigation = (record: Data) => {
    if (link) {
      window.scrollTo(0, 0)

      navigate(`/${link}/${record.id}`, { state: { record } })
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-4 ">
        <thead>
          <Card asChild>
            <tr className="py-3 text-left dark:border-gray-700 ">
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`py-3 px-4 h-full ${
                    column.width ? column.width : ''
                  } rounded-bl-none ${
                    index == 0 ? 'rounded-tl-2xl' : ''
                  } items-center
                                    ${
                                      index == columns.length - 1 &&
                                      menu === false
                                        ? 'rounded-r-2xl'
                                        : 'border-r-4 border-gray-700'
                                    }`}
                >
                  <Heading className="!text-gray-800">{column.title}</Heading>
                </th>
              ))}
              {menu ? <td className="px-6 rounded-r-xl"></td> : ''}
            </tr>
          </Card>
        </thead>

        <tbody>
          {data.map((record, index) => (
            <Card
              asChild
              key={index}
              className={`${link ? 'cursor-pointer' : ''} hover:bg-gray-400 
                        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
            >
              <tr
                className="h-16 dark:border-gray-700 "
                onClick={() => {
                  handleNavigation(record)
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <td
                      key={column.key}
                      className={`px-6 max-w-[220px] ${
                        column.width ? column.width : ''
                      } truncate py-2 ${index === 0 ? 'rounded-l-xl' : ''} }
                                        ${
                                          index === columns.length - 1 &&
                                          menu === false
                                            ? 'rounded-r-xl'
                                            : ''
                                        }`}
                    >
                      <div
                        className="w-fit cursor-auto"
                        onClick={e => {
                          e.stopPropagation()
                        }}
                      >
                        {column.render ? (
                          column.render(record)
                        ) : column.dataIndex ? (
                          (record[column.dataIndex] as React.ReactNode)
                        ) : (
                          <Text className="!text-gray-900">
                            {column.subkey
                              ? (record[column.key as keyof Data]?.[
                                  column.subkey as keyof (typeof record)[keyof Data]
                                ] as React.ReactNode)
                              : (record[
                                  column.key as keyof Data
                                ] as React.ReactNode)}
                          </Text>
                        )}
                      </div>
                    </td>
                  )
                })}
                {menu ? (
                  <td
                    className="px-6 rounded-r-xl "
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  >
                    <div className="flex w-full items-center justify-end">
                      {options ? (
                        <OptionsMenu
                          data={record}
                          options={options}
                          onDelete={() => onDelete && onDelete(record)}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </td>
                ) : (
                  ''
                )}
              </tr>
            </Card>
          ))}
        </tbody>
      </table>
    </div>
  )
}
