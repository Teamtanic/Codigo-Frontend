import { Button } from '../../components/Button'
import { CardModal, ModelModalProp } from '../../components/CardModal'
import { Checkbox } from '../../components/Checkbox'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string, boolean } from 'yup'
import { CompanyCreateRequest } from '../../services/Company/types'
import { BusinessRelationshipType } from '../../services/CompanyRelationship/types'
import { createCompany } from '../../services/Company/apiService'

interface CompanyFormProps {
  name: string
  code: string
  email: string
  telephone?: string
  cell_phone?: string
  checkCustomer?: string
  checkSupplier?: string
}

export function CompanyModal({
  action,
  optionsTrigger,
  title
}: ModelModalProp) {
  const validationSchema = object({
    name: string().required('Razão Social é obrigatória'),
    code: string()
      .required('CPF ou CNPJ é obrigatório')
      .matches(/^[0-9]+$/, 'O código deve conter apenas números'),
    email: string()
      .email('Insira um e-mail válido')
      .required('E-mail é obrigatório'),
    tel: string(),
    checkCustomer: boolean(),
    checkSupplier: boolean()
  })

  const onSubmit = async (values: CompanyFormProps) => {
    try {
      let isCustomer: BusinessRelationshipType | undefined =
        values.checkCustomer ? BusinessRelationshipType.CLIENTE : undefined

      let isSupplier: BusinessRelationshipType | undefined =
        values.checkSupplier ? BusinessRelationshipType.FORNECEDOR : undefined

      let cnpj = values.code.length === 14 ? values.code : undefined
      let cpf = values.code.length === 11 ? values.code : undefined

      const businessRelationshipTypeArray: BusinessRelationshipType[] = [
        isCustomer,
        isSupplier
      ].filter((type): type is BusinessRelationshipType => type !== undefined)

      const companyData: CompanyCreateRequest = {
        name: values.name,
        cnpj: cnpj,
        cpf: cpf,
        email: values.email,
        telephone: values.telephone,
        cell_phone: values.cell_phone,
        businessRelationshipType: businessRelationshipTypeArray
      }

      await createCompany(companyData)

      console.log(companyData)
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
          <form
            onSubmit={handleSubmit}
            onClick={event => event.stopPropagation()}
          >
            <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
              <Field
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Razão Social"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite a razão social..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="code"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="code"
                    labelText="CPF ou CNPJ"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="code"
                      type="text"
                      placeholder="Digite o código..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="email"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="email"
                    labelText="E-mail"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="email"
                      type="text"
                      placeholder="Digite o e-mail..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="tel"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="tel"
                    labelText="Telefone"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="tel"
                      type="text"
                      placeholder="Digite o telefone de contato..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <div>
                <Text>Relação da Empresa</Text>
                <div className="flex w-full gap-12">
                  <Field
                    name="checkCustomer"
                    type="checkbox"
                    render={({
                      input: { value, onChange, type, ...input },
                      meta
                    }) => (
                      <>
                        <label
                          htmlFor="checkCustomer"
                          className="flex items-center gap-2 my-2"
                        >
                          <Checkbox
                            id="checkCustomer"
                            checked={!!value}
                            onCheckedChange={checked => onChange(checked)}
                            {...input}
                          />
                          {meta.touched && meta.error && (
                            <Text
                              className="h-12 w-full !text-red-900"
                              size="sm"
                            >
                              {meta.error}
                            </Text>
                          )}
                          <Text size="sm">Cliente</Text>
                        </label>
                      </>
                    )}
                  />

                  <Field
                    name="checkSupplier"
                    type="checkbox"
                    render={({
                      input: { value, onChange, type, ...input },
                      meta
                    }) => (
                      <>
                        <label
                          htmlFor="checkSupplier"
                          className="flex items-center gap-2 my-2"
                        >
                          <Checkbox
                            id="checkSupplier"
                            checked={!!value}
                            onCheckedChange={checked => onChange(checked)}
                            {...input}
                          />
                          {meta.touched && meta.error && (
                            <Text
                              className="h-12 w-full !text-red-900"
                              size="sm"
                            >
                              {meta.error}
                            </Text>
                          )}
                          <Text size="sm">Fornecedor</Text>
                        </label>
                      </>
                    )}
                  />
                </div>
              </div>

              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting}
              >
                {submitting ? 'Enviando...' : action}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  )
}
