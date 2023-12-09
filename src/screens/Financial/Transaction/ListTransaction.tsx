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
import { TransactionResponse } from '../../../services/Transaction/type'
import { getAllTransactions } from '../../../services/Transaction/apiService'

export function ListTransaction() {
  const [lista, setLista] = useState<TransactionResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllTransactions()

        setLista(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a lista:', error)
      }
    }
    fetchData()
  }, [])

  var transactionsDTO: TransactionProps[] = lista.map(transaction => ({
    ...transaction,
    amountMask: amountMask(transaction.amount)
  }))

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Transações</Heading>

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
        </div>
      </div>
    </Container>
  )
}
