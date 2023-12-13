import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import {
  BankAccountCreateRequest,
  BankAccountResponse,
  BankAccountUpdateRequest
} from '../../../services/BankAccount/types'
import {
  createBankAccount,
  editBankAccount,
  getBankAccountById
} from '../../../services/BankAccount/apiService'
import { BankProps } from './TableListBank'
import { createUpdateObject } from '../../../utils'
import { HttpStatusCode } from 'axios'
import { useNavigate } from 'react-router-dom'

export function BankModal({
  action,
  optionsTrigger,
  title,
  mode = 'create',
  data,
  triggerStyle,
  iconTrigger
}: ModelModalProp & { data?: BankProps }) {
  let navigate = useNavigate()

  const validationSchema = object({
    name: string().required('Nome do banco é obrigatória'),
    location: string().required('A localização é obrigatória'),
    balance: string().required('O saldo é obrigatório')
  })

  const onSubmit = async (values: BankAccountCreateRequest) => {
    try {
      const bankaccountData: BankAccountCreateRequest = {
        name: values.name,
        balance: values.balance,
        location: values.location
      }

      if (mode === 'create') {
        await createBankAccount(bankaccountData)
      } else if (mode === 'edit') {
        if (data) {
          const updateData: BankAccountUpdateRequest = createUpdateObject(
            data,
            bankaccountData
          )
          let editResponse = await editBankAccount(updateData, data.id)
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getBankAccountById(data.id)
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: BankAccountResponse = updateResponse.data
              navigate(`/banco/${data.id}`, { state: { record } })
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  let initialValues = {}
  if (data) {
    initialValues = {
      id: data.id,
      name: data.name,
      location: data.location,
      balance: data.balance
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
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
          triggerStyle={triggerStyle}
          iconTrigger={iconTrigger}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
              <Field
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Nome"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o banco..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="location"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="location"
                    labelText="Localização"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="location"
                      type="text"
                      placeholder="Digite a localização..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="balance"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="balance"
                    labelText="Saldo"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="balance"
                      type="number"
                      min="0"
                      placeholder="Informe o saldo na conta..."
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
