import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListTransaction, TransactionProps } from './TableListTransaction'
import { amountMask } from '../../../utils'
import { TransactionModal } from './TransactionModal'
import { useEffect, useState } from 'react'
import {
  TransactionResponse,
  TransactionType
} from '../../../services/Transaction/type'
import { getAllTransactions } from '../../../services/Transaction/apiService'
import { Pagination } from '../../../components/Pagination'
import { Loader } from '../../../components/Loader'

export function ListTransaction() {
  const [transaction, setTransaction] = useState<TransactionResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [numberOfElements, setNumberOfElements] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllTransactions(currentPage - 1)

        setTransaction(response.data.content)
        setTotalPages(response.data.totalPages)
        setNumberOfElements(response.data.numberOfElements)
      } catch (error) {
        console.error('Erro ao obter a lista:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [transaction])

  var transactionsDTO: TransactionProps[] = transaction.map(transaction => ({
    ...transaction,
    amountMask: amountMask(transaction.amount)
  }))

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Transações</Heading>

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
              <TableListTransaction data={transactionsDTO} />

              <TransactionModal
                title="Cadastro de Transação"
                action="Adicionar"
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
