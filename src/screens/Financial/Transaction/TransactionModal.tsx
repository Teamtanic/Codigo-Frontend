import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import {
  TransactionCreateRequest,
  TransactionType
} from '../../../services/Transaction/type'
import { Select, SelectOption } from '../../../components/Select'
import { Text } from '../../../components/Text'
import DropdownInput from '../../../components/DropdownInput'
import { createTransaction } from '../../../services/Transaction/apiService'
import { format } from 'date-fns'

/*
export function TransactionModal({ action, title }: ModelModalProp) {
  const validationSchema = object({
    description: string(),
    amount: string(),
    transactionType: string(),
    dtCashflow: string(),
    paymentMethod: string(),
    installments: string(),
    qtyInstallments: string(),
    projectId: string(),
    bankAccountId: string(),
    productsWarehouse: string()
  })
  */

export function TransactionModal({ action, title }: ModelModalProp) {
  const validationSchema = object({
    description: string().required('Nome do banco é obrigatória'),
    amount: string().required('Valor é obrigatório'),
    transactionType: string().required('Tipo é obrigatório'),
    dtCashflow: string().required('Data é obrigatória'),
    paymentMethod: string().required('Método de pagamento é obrigatório'),
    installments: string().required('Valor da parcela é obrigatória'),
    qtyInstallments: string().required('Quantidade de parcelas é obrigatória'),
    projectId: string(),
    bankAccountId: string(),
    productsWarehouse: string()
  })

  const onSubmit = async (values: any) => {
    try {
      const transactionData: TransactionCreateRequest = {
        description: values.description,
        amount: values.amount,
        paymentMethod: values.paymentMethod,
        type: values.transactionType,
        dtCashflow: format(new Date(values.dtCashflow), 'dd/MM/yyyy'),
        installments: values.installments,
        qtyInstallments: values.qtyInstallments,
        bankAccountId: values.bankAccountId,
        productsWarehouse: values.productsWarehouse,
        projectId: values.projectId
      }

      console.log(transactionData)

      await createTransaction(transactionData)
    } catch (error) {
      console.error(error)
    }
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
                    name="transactionType"
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

              <Field
                name="bankAccountId"
                render={({ input, meta }) => (
                  <DropdownInput
                    labelText="Banco da transação"
                    labelFor="searchInput"
                    placeholder="Informe o banco"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    inputValue={input.value}
                    onChange={input.onChange}
                  />
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
