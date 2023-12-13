import { useLocation } from 'react-router-dom'
import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Navbar } from '../../components/Navbar'
import { Text } from '../../components/Text'
import { TableListUser } from '../RH/User/TableListUser'
import * as Tabs from '@radix-ui/react-tabs'
import { TableListCompany } from '../Company/TableListCompany'
import { TableListOffer } from '../Offer/TableListOffer'
import { TableListDocument } from '../Documents/TableListDocument'

export function DetailsProject() {
  const location = useLocation()
  const { state } = location
  const project = state.record

  console.log(project)
  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Detalhes Projeto</Heading>
        <Card className="w-full !p-0">
          <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
            <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
              <Heading size="md" className="!text-gray-900 font-semibold">
                {project.title}
              </Heading>

              {/*
              <Card
              className={`${
                project.status == 'Em aberto'
                ? '!bg-blue-400 '
                : '!bg-zinc-500'
              } w-fit flex items-center justify-center max-sm:hidden`}
              >
                <Text className="!text-gray-100" size="xm">
                  {project.status}
                </Text>
              </Card>
                */}
            </div>
            <div className="bg-gray-300 w-full p-4 overflow-y-auto">
              <Text className="!text-gray-900 font-semibold">
                {project.description}
              </Text>
            </div>
          </div>
        </Card>

        <div className="mt-10">
          <Tabs.Root className="flex flex-col w-full mt-6" defaultValue="tab1">
            <Tabs.List
              className="shrink-0 flex border-b"
              aria-label="Dados da empresa"
            >
              <Tabs.Trigger
                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                value="tab1"
              >
                Ofertas
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                value="tab2"
              >
                Empresas
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                value="tab3"
              >
                Usuários
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                value="tab4"
              >
                Documentos
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow p-5 bg-gray-100 rounded-b-md outline-none "
              value="tab1"
            >
              {project.offer ? <TableListOffer data={project.offer} /> : ''}
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-gray-100 rounded-b-md outline-none "
              value="tab2"
            >
              {project.company ? (
                <TableListCompany data={project.company} />
              ) : (
                ''
              )}
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-gray-100 rounded-b-md outline-none "
              value="tab3"
            >
              {project.employees ? (
                <TableListUser data={project.employees} />
              ) : (
                ''
              )}
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-gray-100 rounded-b-md outline-none "
              value="tab4"
            >
              {project.document ? (
                <TableListDocument data={project.document} />
              ) : (
                ''
              )}
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </Container>
  )
}
