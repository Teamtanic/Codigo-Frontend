import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import * as Tabs from '@radix-ui/react-tabs';
import { TableListProject } from "../Project/TableListProject";
import { TableListUser } from "../RH/User/TableListUser";
import { useLocation } from "react-router-dom";

export function DetailsDocument() {
    const location = useLocation();
    const { state } = location;
    const document = state.record;

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Detalhes Documento</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col max-md:w-3/5 md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{document.name}</Text>
                                <Card className={`w-fit flex items-center ${document.type === 'ENTRADA' ? '!bg-emerald-400' : '!bg-red-400'}`}>
                                    <Text className="!text-gray-900 font-semibold" size="xm">{document.type}</Text>
                                </Card>
                            </div>
                            <Text size="sm" className="!text-gray-500 font-semibold">Tamanho: {document.size}</Text>
                            <Text size="sm" className="!text-gray-500 font-semibold">Data: {document.dt_doc}</Text>
                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                            <Text className="!text-gray-900 font-semibold">Tipo de documento: {document.doc_type}</Text>
                        </div>
                    </div>
                </Card>

                <div className="mt-10">
                    <Tabs.Root
                        className="flex flex-col w-full mt-6"
                        defaultValue="tab1"
                    >
                        <Tabs.List className="shrink-0 flex border-b" aria-label="Dados da empresa">
                            <Tabs.Trigger
                                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                                value="tab1"
                            >
                                Documento
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                                value="tab2"
                            >
                                Projeto
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                                value="tab3"
                            >
                                Usuário
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content
                            className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                            value="tab1"
                        >

                        </Tabs.Content>
                        <Tabs.Content
                            className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                            value="tab2"
                        >
                            <TableListProject data={document.project} hasOptions={false} />
                        </Tabs.Content>
                        <Tabs.Content
                            className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                            value="tab3"
                        >
                            <TableListUser data={document.user} />
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </div>
        </Container>
    )
}