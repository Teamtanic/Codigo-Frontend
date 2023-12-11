import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Navbar } from '../../components/Navbar'
import { TextInput } from '../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { ProjectProps, TableListProject } from './TableListProject'
import { ProjectModal } from './ProjectModal'
import { ProjectResponse } from '../../services/Project/type'
import { useEffect, useState } from 'react'
import { getAllProjects } from '../../services/Project/apiService'

export function ListProject() {
  const [projects, setProjects] = useState<ProjectResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProjects()

        setProjects(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [projects])

  const projectsDTO: ProjectProps[] = projects.map(project => ({
    ...project,
    statusText: project.status === true ? 'Em aberto' : 'Fechado'
  }))

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Projetos</Heading>

        <div className="w-full mt-3">
          <Card className="w-full py-3 px-4">
            <TextInput.Root labelStyle="text-gray-900">
              <TextInput.Icon>
                <MagnifyingGlass />
              </TextInput.Icon>
              <TextInput.Input
                id="nome"
                type="text"
                placeholder="Pesquisar..."
              />
            </TextInput.Root>
          </Card>

          <div className="mt-10">
            <TableListProject data={projectsDTO} />

            <ProjectModal title="Cadastro de Projeto" action="Adicionar" />
          </div>
        </div>
      </div>
    </Container>
  )
}
