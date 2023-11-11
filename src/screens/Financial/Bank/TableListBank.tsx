import { ModalOptions } from "../../../components/OptionsMenu";
import { Column, Table } from "../../../components/Table";
import { BankEditModal } from "./BankEditModal";

export interface BankProps {
    id: string,
    name: string,
    balance: string
}

export function TableListBank({ data }: {data : BankProps[]}) {
    var columns : Column<BankProps>[] = [
        { key: 'name', title: 'Banco' },
        { key: 'balance', title: 'Valor' },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <BankEditModal />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}