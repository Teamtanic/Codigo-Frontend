import { ModalOptions } from '../../../components/OptionsMenu'
import { Column, Table } from '../../../components/Table'
//import { Text } from '../../../components/Text'
import { deleteRole } from '../../../services/Role/apiService'
import { RoleResponse } from '../../../services/Role/types'
//import { UserProps } from '../User/TableListUser'
import { RoleModal } from './RoleModal'

export function TableListRole({ data }: { data: RoleResponse[] }) {
  const handleDelete = async (record: RoleResponse) => {
    try {
      await deleteRole(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

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
        <RoleModal
          title="Editar Cargo"
          action="Editar"
          optionsTrigger
          mode="edit"
        />
      )
    }
  ]

  return (
    <Table
      link="cargo"
      data={data}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
