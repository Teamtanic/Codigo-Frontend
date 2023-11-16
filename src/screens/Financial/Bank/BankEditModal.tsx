import { CardModal } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";

export function BankEditModal(){
    return (
        <CardModal title="Editar Banco" action="Editar Banco" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <TextInput.Root labelFor="name" labelText="Nome">
                    <TextInput.Input id="name" type="text" placeholder="Digite o banco..." />
                </TextInput.Root>
                <TextInput.Root labelFor="location" labelText="Localização">
                    <TextInput.Input id="location" type="number" min="0" placeholder="Digite a localização..." />
                </TextInput.Root>
                <TextInput.Root labelFor="balance" labelText="Saldo">
                    <TextInput.Input id="balance" type="text" placeholder="Informe o saldo na conta..." />
                </TextInput.Root>
            </div>
        </CardModal>
    );
}