import { ModalOptions } from '../../components/OptionsMenu'
import { Column, Table } from '../../components/Table'
import { OfferingResponse } from '../../services/Offering/types'
import { OfferModal } from './OfferModal'

export interface BankProps {
  id: string
  description: string
  type: string
}

export function TableListOffer({ data }: { data: OfferingResponse[] }) {
  var columns: Column<OfferingResponse>[] = [
    { key: 'description', title: 'Oferta' },
    { key: 'type', title: 'Tipo' }
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <OfferModal title="Editar Oferta" action="Editar" optionsTrigger />
      )
    }
  ]

  return <Table link="oferta" data={data} columns={columns} options={options} />
}
