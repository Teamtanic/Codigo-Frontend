import { Column, Table } from '../../components/Table'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'
import { CopiableText } from '../../components/CopiableText'
import { ModalOptions } from '../../components/OptionsMenu'
import { CompanyModal } from './CompanyModal'
import { codeMask } from '../../utils'
import { CompanyResponse } from '../../services/Company/types'
import { deleteCompany } from '../../services/Company/apiService'

export interface CompanyProps {
  id: string
  name: string
  relation: string
  code: string
}

export function TableListCompany({ data }: { data: CompanyResponse[] }) {
  const handleDelete = async (record: CompanyResponse) => {
    try {
      await deleteCompany(record.id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  var columns: Column<CompanyResponse>[] = [
    {
      key: 'id',
      title: 'ID',
      render: ({ id }) => <CopiableText id={true} text={id}></CopiableText>,
      width: 'w-10'
    },
    { key: 'name', title: 'Nome' },
    {
      key: 'businessRelationship',
      title: 'Relação',
      render: ({ companyRelationships }: CompanyResponse) => {
        return (
          <div className="flex gap-4">
            {companyRelationships.map(relation => (
              <Card
                key={relation.id}
                className={`${
                  relation.businessRelationship == 'CLIENTE'
                    ? '!bg-emerald-600'
                    : '!bg-blue-950'
                }`}
              >
                <Text
                  size="xm"
                  className={`!text-gray-100 text-sm max-h-10 truncate font-semibold`}
                >
                  {relation.businessRelationship}
                </Text>
              </Card>
            ))}
          </div>
        )
      }
    },
    {
      key: 'cpf',
      title: 'Código',
      render: ({ cpf, cnpj }) => (
        <Card className={`!bg-sky-600`}>
          <Text
            className={`!text-gray-100 text-sm max-h-10 truncate font-semibold`}
          >
            {cpf ? codeMask(cpf) : cnpj ? codeMask(cnpj) : 'Não informado'}
          </Text>
        </Card>
      )
    }
  ]

  var options: ModalOptions[] = [
    {
      key: 'Editar',
      children: (
        <CompanyModal
          optionsTrigger
          title="Edição de Empresa"
          action="Editar"
          mode="edit"
        />
      )
    }
  ]

  return (
    <Table
      link="empresa"
      data={data}
      columns={columns}
      options={options}
      onDelete={handleDelete}
    />
  )
}
