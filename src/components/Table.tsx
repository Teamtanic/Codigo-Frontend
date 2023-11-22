import { Card } from './Card';
import { Text } from './Text';
import { Heading } from './Heading';
import { ModalOptions, OptionsMenu } from './OptionsMenu';
import React from 'react';

export interface Column<Data> {
    key: string;
    title: string;
    dataIndex?: keyof Data;
    render?: (record: Data) => React.ReactNode;
    width?: string;
}

interface TableProps<Data> {
    columns: Column<Data>[];
    data: Data[];
    menu?: boolean;
    options?: ModalOptions[];
    link?: string;
}

export function Table<Data>({ data, columns, menu = true, options, link }: TableProps<Data>) {

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4 ">
                <thead>
                    <Card asChild>
                        <tr className="py-3 text-left dark:border-gray-700 ">
                            {columns.map((column, index) => (
                                <th key={column.key} className={`py-3 px-4 h-full ${column.width ? column.width : ''} rounded-bl-none ${index == 0 ? 'rounded-tl-2xl' : ''} items-center
                                    ${index == columns.length - 1 && menu === false ? 'rounded-r-2xl' : 'border-r-4 border-gray-700'}`} >
                                    <Heading className="!text-gray-800">{column.title}</Heading>
                                </th>
                            ))}
                            {menu ?
                                <td className="px-6 max-md:hidden rounded-r-xl">

                                </td>
                                : ''
                            }
                        </tr>
                    </Card>
                </thead>


                <tbody>
                    {data.map((record, index) => (
                        <Card asChild key={index} className="cursor-pointer hover:bg-gray-400 
                        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <tr className="h-16 dark:border-gray-700 " onClick={(e) => {
                                window.location.href = `${link}/${record.id}`;
                            }}>
                                {columns.map((column, index) => {
                                    return (
                                        <td
                                            key={column.key}
                                            className={`px-6 max-w-[220px] ${column.width ? column.width : ''} truncate py-2 ${index === 0 ? 'rounded-l-xl' : ''} }
                                                ${index === columns.length - 1 && menu === false ? 'rounded-r-xl' : ''}`}>
                                            <div className='w-fit cursor-auto' onClick={(e) => {e.stopPropagation();}}>

                                                {column.render ? column.render(record)
                                                    : column.dataIndex ? (record[column.dataIndex] as React.ReactNode)
                                                        : <Text className="!text-gray-900">{record[column.key as keyof Data] as React.ReactNode}</Text>}
                                            </div>
                                        </td>
                                    );
                                })}
                                {menu ?
                                    <td className="px-6 max-md:hidden rounded-r-xl " onClick={(e) => {e.stopPropagation();}}>
                                        {options ? <OptionsMenu options={options} /> : ''}
                                    </td>
                                    : ''
                                }
                            </tr>
                        </Card>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
