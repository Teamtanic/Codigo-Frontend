import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import {
  CourseCreateRequest,
  CourseResponse,
  CourseUpdateRequest
} from '../../../services/Course/types'
import {
  createCourse,
  editCourse,
  getCourseById
} from '../../../services/Course/apiService'
import { useNavigate } from 'react-router-dom'
import { createUpdateObject } from '../../../utils'
import { HttpStatusCode } from 'axios'

export function CourseModal({
  action,
  optionsTrigger,
  title,
  mode = 'create',
  data,
  triggerStyle,
  iconTrigger
}: ModelModalProp & { data?: CourseResponse }) {
  let navigate = useNavigate()

  const validationSchema = object({
    name: string().required('Nome é obrigatório')
  })

  const onSubmit = async (values: CourseCreateRequest) => {
    try {
      const courseData: CourseCreateRequest = {
        name: values.name
      }

      if (mode === 'create') {
        await createCourse(courseData)
      } else if (mode === 'edit') {
        if (data) {
          const updateCompanyData: CourseUpdateRequest = createUpdateObject(
            data,
            courseData
          )
          let editResponse = await editCourse(updateCompanyData, data.id)
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getCourseById(data.id)
            console.log(updateResponse)
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: CourseResponse = updateResponse.data
              navigate(`/cursos/${data.id}`, {
                state: { record }
              })
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
      name: data.name
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
                    labelText="Curso"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o curso..."
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
