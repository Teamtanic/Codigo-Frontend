import { Button } from '../../../components/Button'
import { CardModal, ModelModalProp } from '../../../components/CardModal'
import DropdownInput, { Record } from '../../../components/DropdownInput'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { array, object, string } from 'yup'
import { searchDepartment } from '../../../services/Department/apiService'
import { DepartmentResponse } from '../../../services/Department/types'
import { Select, SelectOption } from '../../../components/Select'
import {
  Permission,
  RoleCreateRequest,
  RoleResponse,
  RoleUpdateRequest
} from '../../../services/Role/types'
import {
  createRole,
  editRole,
  getRoleById
} from '../../../services/Role/apiService'
import { createUpdateObject } from '../../../utils'
import { HttpStatusCode } from 'axios'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

interface RoleFormProps {
  name: string
  departmentId: string
  permissions: Permission[]
}

export function RoleModal({
  action,
  optionsTrigger,
  title,
  mode = 'create',
  data,
  triggerStyle,
  iconTrigger
}: ModelModalProp & { data?: RoleResponse }) {
  console.log(data)
  let navigate = useNavigate()

  const validationSchema = object({
    name: string().required('Nome é obrigatório'),
    departmentId: string().required('Departamento é obrigatório')
  })

  const onSubmit = async (values: RoleFormProps) => {
    try {
      const roleData: RoleCreateRequest = {
        name: values.name,
        rolePermissions: [
          { departmentId: values.departmentId, permissions: values.permissions }
        ]
      }

      console.log(values)
      console.log(roleData)
      if (mode === 'create') {
        await createRole(roleData)
      } else if (mode === 'edit') {
        if (data) {
          const updateData: RoleUpdateRequest = createUpdateObject(
            data,
            roleData
          )
          let editResponse = await editRole(updateData, data.id)
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getRoleById(data.id)
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: RoleResponse = updateResponse.data
              navigate(`/banco/${data.id}`, { state: { record } })
            }
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const searchFunctionDepartment = async (query: string) => {
    const response = await searchDepartment(query)
    const data = response.data.content

    const options: Record[] = data.map((item: DepartmentResponse) => ({
      label: item.name,
      value: item.id
    }))

    return { data: { content: options } }
  }

  function enumToOptions(enumObject: any): { value: string; label: string }[] {
    return Object.keys(enumObject)
      .filter(key => isNaN(Number(key))) // Filter out enum keys with numeric values
      .map(key => ({ value: enumObject[key], label: enumObject[key] }))
  }

  const permissionOptions = enumToOptions(Permission)

  const [initialValues, setInitialValues] = useState<any>({})

  useEffect(() => {
    if (data) {
      setInitialValues({
        id: data.id,
        name: data.name,
        departmentId: data.rolePermissions.departmentId,
        permissions: [data.rolePermissions.permissions]
      })
    } else {
      setInitialValues({})
    }
  }, [])

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
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-md:px-12 md:px-24  gap-4">
              <Field
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Cargo"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o cargo..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="departmentId"
                render={({ input, meta }) => (
                  <DropdownInput
                    searchFunction={searchFunctionDepartment}
                    labelFor="departmentId"
                    labelText="Departamento"
                    placeholder="Selecione o curso"
                    labelStyle="!text-gray-200"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    inputValue={input.value}
                    onChange={input.onChange}
                  />
                )}
              />

              <Field
                name="permissions"
                render={({ input, meta }) => (
                  <Select
                    labelFor="permissions"
                    labelText="Permissão no sistema"
                    labelStyle="text-gray-200"
                    placeHolder="Informe a permissão"
                    options={permissionOptions}
                    multiple
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
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
