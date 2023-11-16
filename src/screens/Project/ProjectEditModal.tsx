import { CardModal } from "../../components/CardModal";
import { TextAreaInput } from "../../components/TextBox";
import { TextInput } from "../../components/TextInput";

export function ProjectEditModal(){
    return (
        <CardModal title="Editar Produto" action="Editar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
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