import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListUser } from './TableListUser'
import { UserModal } from './UserModal'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../../services/User/apiService'
import { UserResponse } from '../../../services/User/types'

export function ListUser() {
  const [lista, setLista] = useState<UserResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers()

        setLista(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a lista:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Usuários</Heading>

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
            <TableListUser data={lista} />

            <UserModal title="Enviar Token de Cadastro" action="Adicionar" />
          </div>
        </div>
      </div>
    </Container>
  )
}
