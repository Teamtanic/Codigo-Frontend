import { CardModal } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";

export function AuthorityEditModal(){
    return (
        <CardModal title="Editar Autoridade" action="Editar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
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