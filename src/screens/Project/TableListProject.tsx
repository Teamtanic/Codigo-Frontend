import { CopiableText } from '../../components/CopiableText'
import { ModalOptions } from '../../components/OptionsMenu'
import { Column, Table } from '../../components/Table'
import { deleteProject } from '../../services/Project/apiService'
import { ProjectResponse } from '../../services/Project/type'
import { ProjectModal } from './ProjectModal'

export interface ProjectProps extends ProjectResponse {
  statusText: string
}

export interface TableListProps {
  hasOptions?: boolean
}

export function TableListProject({
  data
}: { data: ProjectProps[] } & TableListProps) {
  const handleDelete = async (record: ProjectResponse) => {
    try {
      await deleteProject(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  var columns: Column<ProjectProps>[] = [
    {
      key: 'id',
      title: 'ID',
      render: ({ id }) => <CopiableText id={true} text={id}></CopiableText>,
      width: 'w-10'
    },
    { key: 'title', title: 'Projeto' },
    { key: 'customer', title: 'Cliente' },
    { key: 'statusText', title: 'Situação' }
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <ProjectModal
          title="Editar Projeto"
          action="Editar"
          optionsTrigger
          mode="edit"
        />
      )
    }
  ]

  return (
    <Table
      link="projeto"
      data={data}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
