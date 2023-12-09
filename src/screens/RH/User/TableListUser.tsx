import { Column, Table } from '../../../components/Table'
import { UserResponse } from '../../../services/User/types'

export function TableListUser({ data }: { data: UserResponse[] }) {
  var columns: Column<UserResponse>[] = [
    { key: 'name', title: 'Nome' },
    //{ key: 'role', title: 'Cargo' },
    { key: 'department', subkey: 'name', title: 'Departamento' }
  ]

  return <Table link="usuario" data={data} columns={columns} />
}
