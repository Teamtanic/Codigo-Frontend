import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import { TransactionType } from '../../../services/Transaction/type'
import { Select, SelectOption } from '../../../components/Select'
import { Text } from '../../../components/Text'
import DropdownInput from '../../../components/DropdownInput'

export function TransactionModal({ action, title }: ModelModalProp) {
  const validationSchema = object({
    description: string().required('Nome do banco é obrigatória'),
    location: string().required('A localização é obrigatória'),
    balance: string().required('O saldo é obrigatório')
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const enumOptions: SelectOption[] = Object.entries(TransactionType).map(
    ([value, label]) => ({
      value,
      label
    })
  )

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
        <CardModal title={title} action={action}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
              <Field
                name="description"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="description"
                    labelText="Descrição"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="description"
                      type="text"
                      placeholder="Descreva o motivo da transação..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="amount"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="amount"
                        labelText="Valor"
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                      >
                        <TextInput.Icon>
                          <Text>R$</Text>
                        </TextInput.Icon>
                        <TextInput.Input
                          id="amount"
                          type="text"
                          placeholder="Informe o valor da transação..."
                          {...input}
                        />
                      </TextInput.Root>
                    )}
                  />
                </div>

                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="type"
                    render={({ input, meta }) => (
                      <Select
                        labelFor="amount"
                        labelText="Tipo da Transação"
                        placeHolder="Informe o tipo"
                        options={enumOptions}
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                        {...input}
                      />
                    )}
                  />
                </div>

                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="dtCashflow"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="dtCashflow"
                        labelText="Data"
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                      >
                        <TextInput.Input
                          id="dtCashflow"
                          type="date"
                          placeholder="Informe o valor da transação..."
                          {...input}
                        />
                      </TextInput.Root>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="paymentMethod"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="paymentMethod"
                        labelText="Método de pagamento"
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                      >
                        <TextInput.Input
                          id="paymentMethod"
                          type="text"
                          placeholder="Informe o método de pagamento..."
                          {...input}
                        />
                      </TextInput.Root>
                    )}
                  />
                </div>

                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="installments"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="installments"
                        labelText="Valor da parcela"
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                      >
                        <TextInput.Icon>
                          <Text>R$</Text>
                        </TextInput.Icon>
                        <TextInput.Input
                          id="installments"
                          type="text"
                          placeholder="Informe o valor da parcela..."
                          {...input}
                        />
                      </TextInput.Root>
                    )}
                  />
                </div>

                <div className="flex-1 mb-4 lg:mb-0">
                  <Field
                    name="qtyInstallments"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="qtyInstallments"
                        labelText="Quantidade de parcelas"
                        error={
                          meta.touched && meta.error ? meta.error : undefined
                        }
                      >
                        <TextInput.Input
                          id="qtyInstallments"
                          type="text"
                          placeholder="Informe a quantidade de parcelas..."
                          {...input}
                        />
                      </TextInput.Root>
                    )}
                  />
                </div>
              </div>

              <Field
                name="projectId"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="projectId"
                    labelText="Projeto relacionado"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="projectId"
                      type="text"
                      placeholder="Informe o projeto..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <DropdownInput
                labelText="Buscar Dados"
                labelFor="searchInput"
                className="seu-estilo-customizado"
                labelStyle="seu-estilo-de-label"
              />

              <Field
                name="bankAccountId"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="bankAccountId"
                    labelText="Banco da transação"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="bankAccountId"
                      type="text"
                      placeholder="Informe o banco..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="productsWarehouse"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="productsWarehouse"
                    labelText="Produtos da transação"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="productsWarehouse"
                      type="text"
                      placeholder="Informe os produtos..."
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
                {submitting ? 'Enviando...' : action}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  )
}
