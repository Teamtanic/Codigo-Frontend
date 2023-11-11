import { Column, Table } from "../../components/Table";
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { CopiableText } from '../../components/CopiableText';
import { ModalOptions } from "../../components/OptionsMenu";
import { CardModal } from "../../components/CardModal";
import { TextInput } from "../../components/TextInput";
import { Checkbox } from "../../components/Checkbox";
import { CompanyEditModal } from "./CompanyEditModal";

export interface CompanyProps {
    id: string,
    name: string,
    relation: string,
    code: string
}

export function TableListCompany({ data }: { data: CompanyProps[] }) {

    var columns: Column<CompanyProps>[] = [
        {
            key: 'id', title: 'ID',
            render: ({ id }) =>
                <CopiableText id={true} text={id}></CopiableText>,
            width: 'w-10'
        },
        { key: 'name', title: 'Nome' },
        {
            key: 'relation', title: 'Relação',
            render: ({ relation }) =>
                <Card className={
                    `${relation === 'CLIENTE' ? '!bg-emerald-600' : '!bg-blue-950'}`
                }>
                    <Text className={`!text-gray-100 text-sm max-h-10 truncate font-semibold`}>
                        {relation}
                    </Text>
                </Card>
        },
        {
            key: 'code', title: 'Código',
            render: ({ code }) =>
                <Card className={
                    `!bg-sky-600`
                }>
                    <Text className={`!text-gray-100 text-sm max-h-10 truncate font-semibold`}>
                        {code}
                    </Text>
                </Card>
        },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <CompanyEditModal />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}