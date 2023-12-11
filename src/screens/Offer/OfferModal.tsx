import { Button } from '../../components/Button'
import { CardModal, ModelModalProp } from '../../components/CardModal'
import { RadioGroup } from '../../components/RadioGroup'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import {
  OfferingCreateRequest,
  OfferingType
} from '../../services/Offering/types'
import { createOffer } from '../../services/Offering/apiService'

interface OfferingTypeOption {
  value: string
  label: string
}

export function OfferModal({ action, optionsTrigger, title }: ModelModalProp) {
  const validationSchema = object({
    description: string().required('Descrição da oferta é obrigatória'),
    type: string().required('É necessário escolher um tipo')
  })

  const onSubmit = async (values: OfferingCreateRequest) => {
    try {
      const offerData: OfferingCreateRequest = {
        description: values.description,
        type: values.type
      }

      await createOffer(offerData)

      console.log(offerData)
    } catch (error) {
      console.error(error)
    }
  }

  const getOfferingTypeOptions = (): OfferingTypeOption[] => {
    return Object.keys(OfferingType).map(key => ({
      value: key,
      label: OfferingType[key as keyof typeof OfferingType]
    }))
  }

  const offeringTypeOptions = getOfferingTypeOptions()

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
                      placeholder="Descreva essa oferta..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <div>
                <Text>Tipo de Oferta</Text>
                <div className="flex w-full gap-12">
                  <Field
                    name="type"
                    type="radio"
                    render={({
                      input: { value, onChange, type, ...input },
                      meta
                    }) => (
                      <>
                        <RadioGroup
                          direction="row"
                          options={offeringTypeOptions}
                          onChange={checked => onChange(checked)}
                          {...input}
                        />
                        {meta.touched && meta.error && (
                          <Text className="h-12 w-full !text-red-900" size="sm">
                            {meta.error}
                          </Text>
                        )}
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
