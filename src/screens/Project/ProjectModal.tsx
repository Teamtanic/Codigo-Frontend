import { Button } from '../../components/Button'
import { CardModal, ModelModalProp } from '../../components/CardModal'
import { TextAreaInput } from '../../components/TextBox'
import { TextInput } from '../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import { ProjectCreateRequest } from '../../services/Project/type'
import { createProject } from '../../services/Project/apiService'
import { useEffect, useState } from 'react'
import {
  getAllCustomers,
  getAllSuppliers
} from '../../services/Company/apiService'
import { CompanyResponse } from '../../services/Company/types'
import { Select, SelectOption } from '../../components/Select'

export function ProjectModal({
  action,
  optionsTrigger,
  title
}: ModelModalProp) {
  const validationSchema = object({
    title: string().required('Título é obrigatório'),
    description: string().required('Descrição é obrigatória'),
    customer: string(),
    supplier: string(),
    offering: string().required('A oferta oferecida é obrigatória')
  })

  const [customers, setCustomers] = useState<CompanyResponse[]>([])
  const [suppliers, setSuppliers] = useState<CompanyResponse[]>([])
  const [offerings, setOfferings] = useState<CompanyResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCustomers = await getAllCustomers()
        const responseSuppliers = await getAllSuppliers()
        const responseOffering = await getAllCustomers()

        setCustomers(responseCustomers.data.content)
        setSuppliers(responseSuppliers.data.content)
      } catch (error) {
        console.error('Erro ao obter a lista:', error)
      }
    }
    fetchData()
  }, [])

  const customerOptions: SelectOption[] = customers.map(customer => ({
    value: customer.id,
    label: customer.name
  }))

  const supplierOptions: SelectOption[] = suppliers.map(supplier => ({
    value: supplier.id,
    label: supplier.name
  }))

  const onSubmit = async (values: any) => {
    try {
      const projectData: ProjectCreateRequest = {
        title: values.title,
        description: values.description,
        companyRelationshipIds: [values.customer, values.supplier],
        offeringIds: [values.offering],
        users: [
          {
            userId: values.userId,
            role: values.role
          }
        ]
      }

      console.log(projectData)
      const response = await createProject(projectData)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        try {
          validationSchema.validateSync(values, { abortEarly: false })
        } catch (err: any) {
          return err.inner.reduce((errors: any, error: any) => {
            return { ...errors, [error.path]: error.message }
          }, {})
        }
      }}
      render={({ handleSubmit, submitting }) => (
        <CardModal
          title={title}
          action={action}
          optionsTrigger={optionsTrigger}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
              <Field
                name="title"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="title"
                    labelText="Título"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="title"
                      type="text"
                      placeholder="Digite o título..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="description"
                render={({ input, meta }) => (
                  <TextAreaInput
                    id="description"
                    labelFor="description"
                    labelText="Descrição"
                    placeholder="Dê uma breve descrição do seu projeto..."
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="customer"
                render={({ input, meta }) => (
                  <Select
                    labelFor="customer"
                    labelText="Cliente"
                    placeHolder="Selecione o cliente"
                    options={customerOptions}
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="supplier"
                render={({ input, meta }) => (
                  <Select
                    labelFor="supplier"
                    labelText="Fornecedor"
                    placeHolder="Selecione o fornecedor"
                    options={customerOptions}
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="offering"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="offering"
                    labelText="Serviço ou Produto"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="offering"
                      type="text"
                      placeholder="Informe o serviço ou produto fornecido..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting}
              >
                {submitting ? 'Enviando...' : 'Adicionar'}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  )
}
