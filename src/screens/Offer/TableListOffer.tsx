import { ModalOptions } from "../../components/OptionsMenu";
import { Column, Table } from "../../components/Table";
import { OfferEditModal } from "./OfferEditModal";
import { OfferModal } from "./OfferModal";

export interface BankProps {
    id: string,
    description: string,
    type: string
}

export function TableListOffer({ data }: {data : BankProps[]}) {
    var columns : Column<BankProps>[] = [
        { key: 'description', title: 'Oferta' },
        { key: 'type', title: 'Tipo' },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <OfferModal title="Editar Oferta" action="Editar" />
        }
    ]

    return (
        <Table data={data} columns={columns} options={options} />
    )
}