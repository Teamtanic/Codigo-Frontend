import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { TextInput } from '../../../components/TextInput'
import { MagnifyingGlass } from 'phosphor-react'
import { TableListCourse } from './TableListCourse'
import { CourseModal } from './CourseModal'
import { useEffect, useState } from 'react'
import { CourseResponse } from '../../../services/Course/types'
import { getAllCourses } from '../../../services/Course/apiService'
import { Loader } from '../../../components/Loader'

export function ListCourse() {
  const [courses, setCourses] = useState<CourseResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses()

        setCourses(response.data.content)
      } catch (error) {
        console.error('Erro ao obter a cursos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [courses])

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Cursos</Heading>

        {loading ? (
          <Loader />
        ) : (
          <div className="w-full mt-3">
            <Card className="w-full py-3 px-4">
              <TextInput.Root labelStyle="text-gray-900">
                <TextInput.Icon>
                  <MagnifyingGlass />
                </TextInput.Icon>
                <TextInput.Input
                  id="nome"
                  type="text"
                  placeholder="Pesquisar..."
                />
              </TextInput.Root>
            </Card>

            <div className="mt-10">
              <TableListCourse data={courses} />

              <CourseModal title="Cadastro de Curso" action="Adicionar" />
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
