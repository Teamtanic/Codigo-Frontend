import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListBank } from './TableListBank'
import { amountMask } from '../../../utils'
import { BankModal } from './BankModal'
import { useEffect, useState } from 'react'
import { BankAccountResponse } from '../../../services/BankAccount/types'
import { getAllBankAccounts } from '../../../services/BankAccount/apiService'
import { Loader } from '../../../components/Loader'

interface BankProps {
  id: string
  name: string
  balance: string
}

export function ListBank() {
  const [bankAccount, setBankAccount] = useState<BankAccountResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBankAccounts()

        setBankAccount(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a bankaccount:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [bankAccount])

  var banksDTO: BankProps[] = bankAccount.map(bank => ({
    ...bank,
    balance: amountMask(bank.balance)
  }))

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Bancos</Heading>

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
              <TableListBank data={banksDTO} />

              <BankModal title="Cadastro de Banco" action="Adicionar" />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
