import { useLocation } from 'react-router-dom'
import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { Heading } from '../../../components/Heading'
import { Navbar } from '../../../components/Navbar'
import { Text } from '../../../components/Text'
import { TableListUser } from '../User/TableListUser'
import { CourseResponse } from '../../../services/Course/types'
import { deleteCourse } from '../../../services/Course/apiService'
import { CourseModal } from './CourseModal'
import { PencilSimple, Trash } from 'phosphor-react'
import { CardDelete } from '../../../components/CardDelete'

export function DetailsCourse() {
  const location = useLocation()
  const { state } = location
  const course: CourseResponse = state.record
  console.log(course)

  const handleDelete = async (record: CourseResponse) => {
    try {
      await deleteCourse(record.id)
      window.location.href = `/cursos`
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <div className="flex justify-between items-center">
          <Heading size="lg">Detalhes Curso</Heading>

          <div className="flex gap-3 items-center">
            <CourseModal
              title="Editar Curso"
              optionsTrigger
              action="Editar"
              iconTrigger={<PencilSimple size={16} weight="bold" />}
              triggerStyle="!w-fit !h-fit !bg-sky-500 hover:!bg-sky-300"
              mode="edit"
              data={course}
            />

            <CardDelete
              onDelete={() => handleDelete(course)}
              triggerStyle="!bg-red-700"
              iconTrigger={<Trash size={16} weight="bold" />}
            />
          </div>
        </div>
        <Card className="w-full !p-0">
          <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
            <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
              <div className="w-full flex items-center justify-between">
                <Text className="!text-gray-900 font-semibold">
                  {course.name}
                </Text>
              </div>
            </div>
            <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
              <div>
                <Text className="!text-gray-900 font-semibold">
                  Total de funcionários:{' '}
                </Text>
                <Text className="!text-gray-900">
                  {/*course.employees.length*/}
                </Text>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-10">
          <Heading>Funcionários nesse Curso</Heading>
          {/*course.employees? <TableListUser data={course.employees} /> : ''*/}
        </div>
      </div>
    </Container>
  )
}
