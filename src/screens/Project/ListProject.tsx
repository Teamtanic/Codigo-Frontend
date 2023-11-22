import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { ProjectProps, TableListProject } from "./TableListProject"
import { ProjectModal } from "./ProjectModal";

export function ListProject() {
    var projects = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", status: true, customer: "McDonalds" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", status: true, customer: "Usiminas" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", status: false, customer: "Interpol" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", description: "Automação Industrial", status: true, customer: "BOPE" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", description: "Matemática", status: false, customer: "Burger King" },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", description: "Ciência da Computação", status: false, customer: "EMTU" },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", description: "Geografia", status: false, customer: "McDonalds" },
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Análise e Desenvolvimento de Sistemas", status: true, customer: "McDonalds" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Turismo", status: true, customer: "Usiminas" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Letras", status: false, customer: "Interpol" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", description: "Automação Industrial", status: true, customer: "BOPE" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", description: "Matemática", status: false, customer: "Burger King" },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", description: "Ciência da Computação", status: false, customer: "EMTU" },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", description: "Geografia", status: false, customer: "McDonalds" },
    ];

    const projectsDTO: ProjectProps[] = projects.map(project => ({
        ...project,
        status: project.status === true ? 'Em aberto' : 'Fechado'
    }))

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Projetos</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root labelStyle="text-gray-900">
                            <TextInput.Icon>
                                <MagnifyingGlass />
                            </TextInput.Icon>
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <TableListProject data={projectsDTO} />
                        
                        <ProjectModal title="Cadastro de Projeto" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}