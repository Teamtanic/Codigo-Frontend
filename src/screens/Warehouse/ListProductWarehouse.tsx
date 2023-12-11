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
import { hasPermission, isTokenExpired } from '../../utils'
import { useNavigate } from 'react-router-dom'

export function ListProductWarehouse() {
  const [lista, setLista] = useState<ProductWarehouseResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts()

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
              <TableListProductWarehouse data={lista} />

              <ProductModal title="Cadastro de Produto" action="Adicionar" />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
