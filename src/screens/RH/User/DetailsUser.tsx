import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { Text } from '../../../components/Text'
import { formatPhoneNumber } from '../../../utils'
import * as Tabs from '@radix-ui/react-tabs'

import { TableListProject } from '../../Project/TableListProject'
import { useLocation } from 'react-router-dom'
import { TableListDocument } from '../../Documents/TableListDocument'
import { UserResponse } from '../../../services/User/types'

export function DetailsUser() {
  const location = useLocation()
  const { state } = location
  const user: UserResponse = state.record

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Detalhes Usuário</Heading>
        <Card className="w-full !p-0">
          <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
            <div className="flex flex-col min-w-[50%] max-w-[50%] md:w-4/5 p-4 justify-evenly">
              <div className="max-w-full flex items-center justify-between">
                <Text className="!text-gray-900 font-semibold truncate">
                  {user.name}
                </Text>
              </div>
              <Text className="!text-gray-500 font-semibold">
                {user.role.name}, {user.department.name}
              </Text>
              <Text className="!text-gray-500 font-semibold">
                Curso: {user.course.name}
              </Text>
              <Text className="!text-gray-500 font-semibold">
                Prontuário: {user.prontuary}
              </Text>
            </div>
            <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
              <div>
                <Text className="!text-gray-900 font-semibold">Telefone: </Text>
                <Text className="!text-gray-900">
                  {user.contact
                    ? user.contact.telephone
                      ? formatPhoneNumber(user.contact.telephone)
                      : 'Não informado'
                    : 'Não informado'}
                </Text>
              </div>
              <div>
                <Text className="!text-gray-900 font-semibold">Celular: </Text>
                <Text className="!text-gray-900">
                  {user.contact
                    ? user.contact.cell_phone
                      ? formatPhoneNumber(user.contact.cell_phone)
                      : 'Não informado'
                    : 'Não informado'}
                </Text>
              </div>
              <div>
                <Text className="!text-gray-900 font-semibold">Email: </Text>
                <Text className="!text-gray-900">
                  {user.contact ? user.contact.email : 'Não informado'}
                </Text>
              </div>
            </div>
          </div>
        </Card>

        <Tabs.Root className="flex flex-col w-full mt-6" defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex border-b"
            aria-label="Dados da empresa"
          >
            <Tabs.Trigger
              className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
              value="tab1"
            >
              Documentos
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
              value="tab2"
            >
              Projetos
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-gray-100 rounded-b-md outline-none "
            value="tab1"
          >
            {/*user.document ? <TableListDocument data={user.document} /> : ''*/}
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-gray-100 rounded-b-md outline-none "
            value="tab2"
          >
            {/*user.project ? <TableListProject data={user.project} /> : ''*/}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </Container>
  )
}
