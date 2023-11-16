import { CardModal } from "../../components/CardModal";
import { TextInput } from "../../components/TextInput";

export function ProductEditModal() {
    return (
        <CardModal title="Cadastro de Produto" action="Editar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <TextInput.Root labelFor="product" labelText="Produto">
                    <TextInput.Input id="product" type="text" placeholder="Digite o produto..." />
                </TextInput.Root>
                <TextInput.Root labelFor="quantity" labelText="Quantidade">
                    <TextInput.Input id="quantity" type="number" min="0" placeholder="Digite a quantidade..." />
                </TextInput.Root>
                <TextInput.Root labelFor="supplier" labelText="Fornecedor">
                    <TextInput.Input id="supplier" type="text" placeholder="Informe o fornecedor..." />
                </TextInput.Root>
                <TextInput.Root labelFor="price" labelText="Preço">
                    <TextInput.Input id="price" type="text" placeholder="Informe o preço..." />
                </TextInput.Root>
            </div>
        </CardModal>
    );
}