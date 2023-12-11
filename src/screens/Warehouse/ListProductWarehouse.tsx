import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Navbar } from '../../components/Navbar'
import { TextInput } from '../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListProductWarehouse } from './TableListProductWarehouse'
import { ProductModal } from './ProductModal'
import { useEffect, useState } from 'react'
import { ProductWarehouseResponse } from '../../services/ProductWarehouse/type'
import { getAllProducts } from '../../services/ProductWarehouse/apiService'
import { Loader } from '../../components/Loader'
import { Pagination } from '../../components/Pagination'

export function ListProductWarehouse() {
  const [products, setProducts] = useState<ProductWarehouseResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [numberOfElements, setNumberOfElements] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts(currentPage - 1)

        setProducts(response.data.content)
        setTotalPages(response.data.totalPages)
        setNumberOfElements(response.data.numberOfElements)
      } catch (error) {
        console.error('Erro ao obter a products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [products])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Produtos no Almoxarifado</Heading>

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
              <TableListProductWarehouse data={products} />

              <ProductModal title="Cadastro de Produto" action="Adicionar" />
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
