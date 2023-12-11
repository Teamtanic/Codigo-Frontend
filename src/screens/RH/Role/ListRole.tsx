import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { CardModal } from '../../../components/CardModal'
import { TableListRole } from './TableListRole'
import { RoleModal } from './RoleModal'
import { useEffect, useState } from 'react'
import { RoleResponse } from '../../../services/Role/types'
import { getAllRoles } from '../../../services/Role/apiService'
import { Loader } from '../../../components/Loader'
import { Pagination } from '../../../components/Pagination'

export function ListRoles() {
  const [roles, setRoles] = useState<RoleResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRoles(currentPage - 1)

        setRoles(response.data.content)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.error('Erro ao obter a roles:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [roles, currentPage])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Cargos</Heading>

        {loading ? (
          <Loader />
        ) : (
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
              <TableListRole data={roles} />

              <RoleModal title="Cadastro de Cargo" action="Adicionar" />
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </Container>
  )
}
