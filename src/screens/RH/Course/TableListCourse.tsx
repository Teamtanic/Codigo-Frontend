import { ModalOptions } from '../../../components/OptionsMenu'
import { Column, Table } from '../../../components/Table'
import { Text } from '../../../components/Text'
import { CourseResponse } from '../../../services/Course/types'
import { CourseModal } from './CourseModal'

export function TableListCourse({ data }: { data: CourseResponse[] }) {
  var columns: Column<CourseResponse>[] = [
    { key: 'name', title: 'Curso' }
    /*{ key: 'employees', title: 'Funcionários', render: ({employees}) => <Text className="!text-gray-900">{employees.length} {employees.length === 1 ? ' funcionário' : ' funcionários'}</Text>  },*/
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <CourseModal title="Editar Curso" action="Editar" optionsTrigger />
      )
    }
  ]

  return <Table link="curso" data={data} columns={columns} options={options} />
}
