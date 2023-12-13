import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { Text } from '../../../components/Text'
import { TextInput } from '../../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { object, string } from 'yup'
import { UserRegisterRequest } from '../../../services/User/types'
import { createUser } from '../../../services/User/apiService'
import DropdownInput, { Record } from '../../../components/DropdownInput'
import { searchCourse } from '../../../services/Course/apiService'
import { CourseResponse } from '../../../services/Course/types'
import { searchRole } from '../../../services/Role/apiService'
import { RoleResponse } from '../../../services/Role/types'
import { searchDepartment } from '../../../services/Department/apiService'
import { DepartmentResponse } from '../../../services/Department/types'

export function CreateUser() {
  const validationSchema = object({
    name: string().required('Nome é obrigatório'),
    email: string()
      .email('Insira um e-mail válido')
      .required('E-mail é obrigatório'),
    login: string().required('Login é obrigatório'),
    prontuary: string().required('Prontuário é obrigatório'),
    password: string().required('Senha é obrigatório'),
    'confirm-password': string().required('Necessário confirmar a senha'),
    telephone: string(),
    cell_phone: string(),
    roleId: string(),
    departmentId: string(),
    courseId: string()
  })

  const onSubmit = async (values: UserRegisterRequest) => {
    try {
      const userData: UserRegisterRequest = {
        name: values.name,
        email: values.email,
        login: values.login,
        prontuary: values.prontuary,
        password: values.password,
        telephone: values.telephone,
        cell_phone: values.cell_phone,
        roleId: values.roleId,
        departmentId: values.departmentId,
        courseId: values.courseId
      }

      await createUser(userData)

      console.log(userData)
    } catch (error) {
      console.error(error)
    }
  }

  const searchFunctionCourse = async (query: string) => {
    const response = await searchCourse(query)
    const data = response.data.content

    const options: Record[] = data.map((item: CourseResponse) => ({
      label: item.name,
      value: item.id
    }))

    return { data: { content: options } }
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

  const searchFunctionRole = async (query: string) => {
    const response = await searchRole(query)
    const data = response.data.content

    const options: Record[] = data.map((item: RoleResponse) => ({
      label: item.name,
      value: item.id
    }))

    return { data: { content: options } }
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 items-center p-24 max-md:p-6 flex-col">
        <Heading size="lg">Cadastro Usuário</Heading>

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
            <div className="mt-10 w-2/4">
              <form onSubmit={handleSubmit} className="gap-6 flex flex-col">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="name"
                      labelText="Nome"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="name"
                        type="text"
                        placeholder="Digite o nome..."
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
                      labelText="Email"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="email"
                        type="text"
                        placeholder="Digite o email..."
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="login"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="login"
                      labelText="Login"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="login"
                        type="text"
                        placeholder="Digite o login..."
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="prontuary"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="prontuary"
                      labelText="Prontuário"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="prontuary"
                        type="text"
                        placeholder="Digite o prontuário..."
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="telephone"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="telephone"
                      labelText="Telefone"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="telephone"
                        type="text"
                        mask="(99) 9999-9999"
                        placeholder="(99) 9999-9999"
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="cell_phone"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="cell_phone"
                      labelText="Celular"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="cell_phone"
                        type="text"
                        mask="(99) 99999-9999"
                        placeholder="(99) 99999-9999"
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="courseId"
                  render={({ input, meta }) => (
                    <DropdownInput
                      searchFunction={searchFunctionCourse}
                      labelFor="courseId"
                      labelText="Curso"
                      placeholder="Selecione o curso"
                      labelStyle="!text-gray-200"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      inputValue={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />

                <Field
                  name="departmentId"
                  render={({ input, meta }) => (
                    <DropdownInput
                      searchFunction={searchFunctionDepartment}
                      labelFor="departmentId"
                      labelText="Departamento na empresa"
                      placeholder="Selecione o departamento"
                      labelStyle="!text-gray-200"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      inputValue={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />

                <Field
                  name="roleId"
                  render={({ input, meta }) => (
                    <DropdownInput
                      searchFunction={searchFunctionRole}
                      labelFor="roleId"
                      labelText="Cargo na empresa"
                      placeholder="Selecione o cargo"
                      labelStyle="!text-gray-200"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      inputValue={input.value}
                      onChange={input.onChange}
                    />
                  )}
                />

                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="password"
                      labelText="Senha"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="password"
                        type="password"
                        placeholder="Digite a senha..."
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Field
                  name="confirm-password"
                  render={({ input, meta }) => (
                    <TextInput.Root
                      labelFor="confirm-password"
                      labelText="Confirme a senha"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                    >
                      <TextInput.Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirme a senha..."
                        {...input}
                      />
                    </TextInput.Root>
                  )}
                />

                <Button className="mt-4 ">
                  <Text className="text-gray-100">
                    {submitting ? 'Enviando...' : 'Cadastrar'}
                  </Text>
                </Button>
              </form>
            </div>
          )}
        />
      </div>
    </Container>
  )
}
