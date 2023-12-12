import { useLocation } from 'react-router-dom'
import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { Text } from '../../../components/Text'
import { amountMask } from '../../../utils'
import { TableListTransaction } from '../Transaction/TableListTransaction'
import { BankAccountResponse } from '../../../services/BankAccount/types'
import { BankModal } from './BankModal'
import { PencilSimple, Trash } from 'phosphor-react'
import { CardDelete } from '../../../components/CardDelete'
import { deleteBankAccount } from '../../../services/BankAccount/apiService'
import { BankProps } from './TableListBank'

export function DetailsBank() {
  const location = useLocation()
  const { state } = location
  const bank: BankProps = state.record

  const handleDelete = async (record: BankProps) => {
    try {
      await deleteBankAccount(record.id)
      window.location.href = '/bancos'
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <div className="flex justify-between items-center">
          <Heading size="lg">Detalhes Banco</Heading>

          <div className="flex gap-3 items-center">
            <BankModal
              optionsTrigger
              title="Editar Banco"
              action="Editar"
              iconTrigger={<PencilSimple size={16} weight="bold" />}
              triggerStyle="!w-fit !h-fit !bg-sky-500 hover:!bg-sky-300"
              mode="edit"
              data={bank}
            />

            <CardDelete
              onDelete={() => handleDelete(bank)}
              triggerStyle="!bg-red-700"
              iconTrigger={<Trash size={16} weight="bold" />}
            />
          </div>
        </div>
        <Card className="w-full !p-0">
          <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
            <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
              <div className="w-full flex items-center justify-between">
                <Text className="!text-gray-900 font-semibold">
                  {bank.name}
                </Text>
              </div>
              <Text className="!text-gray-500 font-semibold">
                Endereço: {bank.location}
              </Text>
            </div>
            <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
              <div>
                <Text className="!text-gray-900 font-semibold">
                  Total no banco:{' '}
                </Text>
                <Text className="!text-gray-900">{bank.balance}</Text>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-10">
          <Heading>Transações</Heading>
          {/*<TableListTransaction data={bank.transactions} />*/}
        </div>
      </div>
    </Container>
  )
}
