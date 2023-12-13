import { ModalOptions } from '../../../components/OptionsMenu'
import { Column, Table } from '../../../components/Table'
import { deleteBankAccount } from '../../../services/BankAccount/apiService'
import { BankAccountResponse } from '../../../services/BankAccount/types'
import { BankModal } from './BankModal'

export interface BankProps extends BankAccountResponse {
  balanceMask?: string
}

export function TableListBank({ data }: { data: BankProps[] }) {
  const handleDelete = async (record: BankProps) => {
    try {
      await deleteBankAccount(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  var columns: Column<BankProps>[] = [
    { key: 'name', title: 'Banco' },
    { key: 'balanceMask', title: 'Valor' },
    { key: 'location', title: 'Endereço' }
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <BankModal
          optionsTrigger
          title="Editar Banco"
          action="Editar"
          mode="edit"
        />
      )
    }
  ]

  return (
    <Table
      link="banco"
      data={data}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
