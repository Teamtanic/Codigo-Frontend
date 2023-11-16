import { CardModal } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

export function OfferEditModal() {
    return (
        <CardModal title="Editar Oferta" action="Editar" triggerStyle="!w-full !bg-transparent !shadow-none hover:!bg-gray-200 hover:dark:!bg-gray-600 bottom-3 !font-normal">
            <div className="flex flex-col w-full max-md:px-12 md:px-24 mb-12 gap-4">
                <TextInput.Root labelFor="offer" labelText="Descrição">
                    <TextInput.Input id="offer" type="text" placeholder="Descreva essa oferta..." />
                </TextInput.Root>
                <div>
                    <Text>Tipo de Oferta</Text>
                    <div className="flex w-full gap-12">
                        <label htmlFor="checkServico" className="flex items-center gap-2 my-2">
                            <Checkbox id="checkServico" />
                            <Text size="sm">
                                Serviço
                            </Text>
                        </label>

                        <label htmlFor="checkProduto" className="flex items-center gap-2 my-2 mr-5">
                            <Checkbox id="checkProduto" />
                            <Text size="sm">
                                Produto
                            </Text>
                        </label>
                    </div>
                </div>
            </div>
        </CardModal>
    );
}