import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { codeMask, formatPhoneNumber } from "../../utils";
import * as Tabs from '@radix-ui/react-tabs';
import { useLocation } from 'react-router-dom';
import { TableListDocument } from "../Documents/TableListDocument";
import { TableListProductWarehouse } from "../Warehouse/TableListProductWarehouse";
import { TableListProject } from "../Project/TableListProject";

export function DetailsCompany() {

    const location = useLocation();
    const { state } = location;
    const company = state.record;

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">{company.name}</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{company.name}</Text>
                                <Card className={`${company.relation == "fornecedor" ? "!bg-blue-950 " : "!bg-emerald-600"} w-fit flex items-center justify-center md:hidden`}>
                                    <Text className="" size="xm">{company.relation}</Text>
                                </Card>
                            </div>
                            <Text className="!text-gray-500 font-semibold">{codeMask(company.code)}</Text>
                            <Card className={`${company.relation == "fornecedor" ? "!bg-blue-950 " : "!bg-emerald-600"} w-fit flex items-center justify-center max-sm:hidden`}>
                                <Text className="!text-gray-100" size="xm">{company.relation}</Text>
                            </Card>
                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                            <div>
                                <Text className="!text-gray-900 font-semibold">Telefone: </Text>
                                <Text className="!text-gray-900">{formatPhoneNumber(company.telephone)}</Text>
                            </div>
                            <div>
                                <Text className="!text-gray-900 font-semibold">Celular: </Text>
                                <Text className="!text-gray-900">{formatPhoneNumber(company.cell_phone)}</Text>
                            </div>
                            <div>
                                <Text className="!text-gray-900 font-semibold">Email: </Text>
                                <Text className="!text-gray-900">{company.email}</Text>
                            </div>
                        </div>
                    </div>
                </Card>

                <Tabs.Root
                    className="flex flex-col w-full mt-6"
                    defaultValue="tab1"
                >
                    <Tabs.List className="shrink-0 flex border-b" aria-label="Dados da empresa">
                        <Tabs.Trigger
                            className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                            value="tab1"
                        >
                            Documentos
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                            value="tab2"
                        >
                            Projetos
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className="bg-gray-100 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=inactive]:bg-gray-200 outline-none cursor-default"
                            value="tab3"
                        >
                            Produtos
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                        className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                        value="tab1"
                    >
                        {company.document? <TableListDocument data={company.document} /> : ''}
                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                        value="tab2"
                    >
                        {company.project? <TableListProject data={company.project} /> : ''}
                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 bg-gray-100 rounded-b-md outline-none "
                        value="tab3"
                    >
                        {company.product? <TableListProductWarehouse data={company.product} /> : ''}
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </Container>
    )
}