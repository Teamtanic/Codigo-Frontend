import { CardModal } from "../../components/CardModal";
import { DropFile } from "../../components/DropFile";
import { TextInput } from "../../components/TextInput";

export function DocumentAddModal() {
    return (
        <CardModal title="Cadastro de Documento" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <TextInput.Root labelFor="companyRelationship" labelText="Empresa relacionada">
                    <TextInput.Input id="companyRelationship" type="text" placeholder="Informe a empresa..." />
                </TextInput.Root>
                <TextInput.Root labelFor="user" labelText="Usuário relacionado">
                    <TextInput.Input id="user" type="text" min="0" placeholder="Informe o usuário..." />
                </TextInput.Root>
                <TextInput.Root labelFor="project" labelText="Projeto relacionado">
                    <TextInput.Input id="project" type="text" placeholder="Informe o projeto relacionado..." />
                </TextInput.Root>
                <TextInput.Root labelFor="doc_type" labelText="Tipo de documento">
                    <TextInput.Input id="doc_type" type="text" placeholder="Insira o tipo de documento..." />
                </TextInput.Root>

                <DropFile labelText="Documentos" />
            </div>
        </CardModal>
    );
}