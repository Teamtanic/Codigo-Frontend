import { CardModal } from "../../components/CardModal";
import { TextInput } from "../../components/TextInput";

export function ProductAddModal() {
    return (
        <CardModal title="Cadastro de Produto" action="Adicionar" triggerStyle="fixed w-fit bottom-5 right-8 rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] !text-gray-100">
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