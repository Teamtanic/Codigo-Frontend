import { CardModal } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";

export function UserEditModal() {
    return (
        <CardModal title="Editar Usuário" action="Adicionar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <form>
                    <TextInput.Root labelFor="email" labelText="Email">
                        <TextInput.Input id="email" type="text" placeholder="Digite o email..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="login" labelText="Login">
                        <TextInput.Input id="login" type="text" placeholder="Digite o login..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="name" labelText="Nome">
                        <TextInput.Input id="name" type="text" placeholder="Digite o nome..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="prontuary" labelText="Prontuário">
                        <TextInput.Input id="prontuary" type="text" placeholder="Digite o prontuário..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="password" labelText="Senha">
                        <TextInput.Input id="password" type="text" placeholder="Digite a senha..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="confirm-password" labelText="Confirme a senha">
                        <TextInput.Input id="confirm-password" type="text" placeholder="Confirme a senha..." />
                    </TextInput.Root>
                </form>
            </div>
        </CardModal>
    );
}