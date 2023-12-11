import { ModalOptions } from '../../../components/OptionsMenu'
import { Column, Table } from '../../../components/Table'
import { Text } from '../../../components/Text'
import { RoleResponse } from '../../../services/Role/types'
import { UserProps } from '../User/TableListUser'
import { RoleModal } from './RoleModal'

export interface RoleProps {
  id: string
  name: string
  employees: UserProps[]
}

export function TableListRole({ data }: { data: RoleResponse[] }) {
  var columns: Column<RoleResponse>[] = [
    { key: 'name', title: 'Cargo' }
    /*
    {
      key: 'employees',
      title: 'Funcionários',
      render: ({ employees }) => (
        <Text className="!text-gray-900">
          {employees.length}{' '}
          {employees.length === 1 ? ' funcionário' : ' funcionários'}
        </Text>
      )
    } */
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <RoleModal title="Editar Cargo" action="Editar" optionsTrigger />
      )
    }
  ]

  return <Table link="cargo" data={data} columns={columns} options={options} />
}
