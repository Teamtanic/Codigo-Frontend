import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListDepartment } from './TableListDepartment'
import { DepartmentModal } from './DepartmentModal'
import { useEffect, useState } from 'react'
import { DepartmentResponse } from '../../../services/Department/types'
import { getAllDepartments } from '../../../services/Department/apiService'
import { Loader } from '../../../components/Loader'

export function ListDepartment() {
  const [lista, setLista] = useState<DepartmentResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllDepartments()

        setLista(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a lista:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [lista])

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Departamentos</Heading>

        {loading ? (
          <Loader />
        ) : (
          <div className="w-full mt-3">
            <Card className="w-full py-3 px-4">
              <TextInput.Root labelFor="text-gray-900">
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
              <TableListDepartment data={lista} />

              <DepartmentModal
                title="Cadastro de Departamento"
                action="Adicionar"
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
