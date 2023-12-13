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
}: { data: ProjectResponse[] } & TableListProps) {
  // Filtrar apenas os projetos que têm um relacionamento do tipo 'CLIENTE'
  const clientProjects = data.filter(project => {
    return (
      project.companyRelationships &&
      Array.isArray(project.companyRelationships) &&
      project.companyRelationships.some(
        relationship => relationship.businessRelationship === 'CLIENTE'
      )
    )
  })

  const handleDelete = async (record: ProjectResponse) => {
    try {
      await deleteProject(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  // Agora você pode usar 'clientProjects' onde precisar, por exemplo, em sua tabela
  const columns: Column<ProjectResponse>[] = [
    {
      key: 'id',
      title: 'ID',
      render: ({ id }) => <CopiableText id={true} text={id}></CopiableText>,
      width: 'w-10'
    },
    { key: 'title', title: 'Projeto' },
    {
      key: 'companyRelationships',
      title: 'Cliente',
      render: ({ companyRelationships }) => {
        const clientRelationship = companyRelationships.find(
          relationship => relationship.businessRelationship === 'CLIENTE'
        )
        return clientRelationship ? clientRelationship.company.name : 'N/A'
      }
    }
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
      data={clientProjects}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
