import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Navbar } from '../../components/Navbar'
import { TextInput } from '../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListOffer } from './TableListOffer'
import { OfferModal } from './OfferModal'
import { useEffect, useState } from 'react'
import { OfferingResponse } from '../../services/Offering/types'
import { getAllOffers } from '../../services/Offering/apiService'
import { Loader } from '../../components/Loader'

export function ListOffer() {
  const [offers, setOffers] = useState<OfferingResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllOffers()

        setOffers(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a offers:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [offers])

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Ofertas</Heading>

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
              <TableListOffer data={offers} />

              <OfferModal title="Adicionar Oferta" action="Adicionar" />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
