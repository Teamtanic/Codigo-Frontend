import { CardModal } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";

export function AuthorityAddModal() {
    return (
        <CardModal title="Adicionar Autoridade" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
            <div >
                <form className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                    <TextInput.Root labelFor="role" labelText="Cargo do usuário">
                        <TextInput.Input id="role" type="text" placeholder="Digite o cargo..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="department" labelText="Departamento do usuário">
                        <TextInput.Input id="department" type="text" placeholder="Digite o departamento..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="privilege" labelText="Privilégio do usuário">
                        <TextInput.Input id="privilege" type="text" placeholder="Informe o privilégio do usuário..." />
                    </TextInput.Root>
                </form>
            </div>
        </CardModal>
    );
}