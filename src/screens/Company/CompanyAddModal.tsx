import { CardModal } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

export function CompanyAddModal() {
    return (
        <CardModal title="Cadastro de Empresa" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
                            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                                <TextInput.Root labelFor="companyName" labelText="Razão Social">
                                    <TextInput.Input id="companyName" type="text" placeholder="Digite a razão social..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="code" labelText="CPF ou CNPJ">
                                    <TextInput.Input id="code" type="text" placeholder="Digite o código..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="email" labelText="E-mail">
                                    <TextInput.Input id="email" type="text" placeholder="Digite o e-mail..." />
                                </TextInput.Root>
                                <TextInput.Root labelFor="tel" labelText="Telefone">
                                    <TextInput.Input id="tel" type="text" placeholder="Digite o telefone de contato..." />
                                </TextInput.Root>
                                <div>
                                    <Text>Relação da Empresa</Text>
                                    <div className="flex w-full gap-12">
                                        <label htmlFor="checkCustomer" className="flex items-center gap-2 my-2">
                                            <Checkbox id="checkCustomer" />
                                            <Text size="sm">
                                                Cliente
                                            </Text>
                                        </label>

                                        <label htmlFor="checkSupplier" className="flex items-center gap-2 my-2 mr-5">
                                            <Checkbox id="checkSupplier" />
                                            <Text size="sm">
                                                Fornecedor
                                            </Text>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </CardModal>
    );
}