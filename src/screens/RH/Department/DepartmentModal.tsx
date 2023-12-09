import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import { DepartmentCreateRequest } from '../../../services/Department/types'
import { createDepartment } from '../../../services/Department/apiService'

export function DepartmentModal({
  action,
  optionsTrigger,
  title
}: ModelModalProp) {
  const validationSchema = object({
    name: string().required('Nome é obrigatório')
  })

  const onSubmit = async (values: any) => {
    try {
      const departmentData: DepartmentCreateRequest = {
        name: values.name
      }

      const response = await createDepartment(departmentData)
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
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Departamento"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o Departamento..."
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
