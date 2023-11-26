import { Card } from "../../../components/Card";
import { CopiableText } from "../../../components/CopiableText";
import { Column, Table } from "../../../components/Table";
import { Text } from "../../../components/Text";

export interface TransactionProps {
    id: string;
    description: string;
    amount: string;
    type: string;
    dt_cashflow: string;
}

export function TableListTransaction({ data }: {data : TransactionProps[]}) {

    var columns : Column<TransactionProps>[] = [
        { key: 'id', title: 'ID', render: ({id}) => 
        <CopiableText id={true} text={id}></CopiableText>,
        width: 'w-10'
    },
        { key: 'description', title: 'Descrição' },
        { key: 'amount', title: 'Valor' },
        { key: 'type', title: 'Transação', 
        render: ({type}) => 
            <Card className={
                `${type === 'ENTRADA' ? '!bg-emerald-400' : '!bg-red-400'}`
            }>
                <Text className={`!text-gray-100 text-sm max-h-10 truncate font-semibold`}>
                    {type}
                </Text>
            </Card>
        },
        { key: 'dt_cashflow', title: 'Data' },
    ];

    return (
        <Table link="transacao" data={data} columns={columns} menu={false} />
    )
}