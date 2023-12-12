import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Navbar } from '../../components/Navbar'
import { TextInput } from '../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListCompany } from './TableListCompany'
import { CompanyModal } from './CompanyModal'
import { useEffect, useState } from 'react'
import { CompanyResponse } from '../../services/Company/types'
import { getAllCompanies } from '../../services/Company/apiService'
import { Loader } from '../../components/Loader'
import { Pagination } from '../../components/Pagination'

export function ListCompany() {
  const [companies, setCompanies] = useState<CompanyResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [numberOfElements, setNumberOfElements] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await getAllCompanies(currentPage - 1)

        setCompanies(response.data.content)
        setTotalPages(response.data.totalPages)
        setNumberOfElements(response.data.numberOfElements)
      } catch (error) {
        console.error('Erro ao obter a companies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Empresas</Heading>

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
              <TableListCompany data={companies} />

              <CompanyModal
                action="Adicionar"
                title="Cadastro de Empresa"
                optionsTrigger={false}
              />
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              numberOfElements={numberOfElements}
            />
          </div>
        )}
      </div>
    </Container>
  )
}
