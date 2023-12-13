import { ModalOptions } from '../../../components/OptionsMenu'
import { Column, Table } from '../../../components/Table'
import { Text } from '../../../components/Text'
import { deleteDepartment } from '../../../services/Department/apiService'
import { DepartmentResponse } from '../../../services/Department/types'
//import { UserProps } from '../User/TableListUser'
import { DepartmentModal } from './DepartmentModal'

/*
export interface DepartmentProps {
  id: string
  name: string
  employees: UserProps[]
}
*/

export function TableListDepartment({ data }: { data: DepartmentResponse[] }) {
  const handleDelete = async (record: DepartmentResponse) => {
    try {
      await deleteDepartment(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  var columns: Column<DepartmentResponse>[] = [
    { key: 'name', title: 'Departamento' }
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
    }
    */
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <DepartmentModal
          title="Editar Departamento"
          action="Editar"
          optionsTrigger
          mode="edit"
        />
      )
    }
  ]

  return (
    <Table
      link="departamento"
      data={data}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
