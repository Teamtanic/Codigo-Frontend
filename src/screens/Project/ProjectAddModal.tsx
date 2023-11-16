import { CardModal } from "../../components/CardModal";
import { TextAreaInput } from "../../components/TextBox";
import { TextInput } from "../../components/TextInput";

export function ProjectAddModal(){
    return (
        <CardModal title="Cadastro de Produto" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <TextInput.Root labelFor="title" labelText="Título">
                    <TextInput.Input id="title" type="text" placeholder="Digite o título..." />
                </TextInput.Root>
                <TextAreaInput id="description" labelFor="description" labelText="Descrição" placeholder="Dê uma breve descrição do seu projeto..." />
                <TextInput.Root labelFor="customer" labelText="Cliente">
                    <TextInput.Input id="customer" type="text" placeholder="Informe o cliente..." />
                </TextInput.Root>
                <TextInput.Root labelFor="supplier" labelText="Fornecedor">
                    <TextInput.Input id="supplier" type="text" placeholder="Informe o fornecedor..." />
                </TextInput.Root>
                <TextInput.Root labelFor="offering" labelText="Serviço ou Produto">
                    <TextInput.Input id="offering" type="text" placeholder="Informe o serviço ou produto fornecido..." />
                </TextInput.Root>
            </div>
        </CardModal>
    );
}