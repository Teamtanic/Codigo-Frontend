import { object, string } from 'yup'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Logo } from '../../../components/Logo'
import { Text } from '../../../components/Text'
import { TextInput } from '../../../components/TextInput'
import ThemeToggle from '../../../components/ThemeToggle'
import { authenticateUser } from '../../../services/User/apiService'
import { UserAuthenticationRequest } from '../../../services/User/types'
import { Field, Form } from 'react-final-form'
import { useNavigate } from 'react-router-dom'
import { getUserData, getUserIndex } from '../../../services/User/utils'

export function Login() {
  const validationSchema = object({
    login: string().required('Login é obrigatório'),
    password: string().required('Senha é obrigatório')
  })

  const navigate = useNavigate()

  const onSubmit = async (values: any) => {
    try {
      const userData: UserAuthenticationRequest = {
        login: values.login,
        password: values.password
      }

      const response = await authenticateUser(userData)

      console.log(response)

      localStorage.setItem('token', response.data.token)

      const userIndex = getUserIndex()

      const userInfo = getUserData()

      navigate(userIndex)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container hasNav={false}>
      <div className="w-full flex py-6 items-center p-24 max-md:p-6 flex-col z-50">
        <div className="w-[120px] fixed bottom-6 left-6">
          <ThemeToggle />
        </div>

        <div className="-z-50 fixed">
          <Logo className="!h-32" />
        </div>

        <div className="mt-16">
          <Heading size="lg">GuaráRP</Heading>
        </div>

        <Card className="p-6 mt-12 md:w-2/5 w-5/6 bg-gray-200">
          <div className="w-full flex justify-center">
            <Heading className="!text-gray-800">Entrar</Heading>
          </div>

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
              <form onSubmit={handleSubmit}>
                <div className="mt-4 gap-6 flex flex-col w-full">
                  <Field
                    name="login"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="login"
                        labelText="Login"
                        labelStyle="!text-gray-800"
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
                    name="password"
                    render={({ input, meta }) => (
                      <TextInput.Root
                        labelFor="password"
                        labelText="Senha"
                        labelStyle="!text-gray-800"
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

                  <Text
                    size="xm"
                    className="text-blue-800 hover:text-blue-600 "
                  >
                    <a href="/recuperar-senha">Esqueci a senha</a>
                  </Text>

                  <Button className="mt-2 ">
                    <Text className="text-gray-100">
                      {submitting ? 'Entrando...' : 'Entrar'}
                    </Text>
                  </Button>
                </div>
              </form>
            )}
          />
        </Card>
      </div>
    </Container>
  )
}
