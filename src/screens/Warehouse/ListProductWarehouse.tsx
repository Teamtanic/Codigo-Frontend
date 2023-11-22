import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListProductWarehouse } from "./TableListProductWarehouse";
import { ProductModal } from "./ProductModal";

export function ListProductWarehouse() {
    var warehouse = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", product: "Cadeira", quantity: 12 },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", product: "Mesa", quantity: 9 },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", product: "Computador", quantity: 11 },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", product: "Estabilizador", quantity: 15 },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", product: "HDMI", quantity: 1 },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", product: "Monitor", quantity: 17 },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", product: "VGA", quantity: 46 },
    ];

    var warehouseDTO = warehouse.map(product => ({
        ...product,
        quantity: `${product.quantity} ${product.quantity === 1 ? ' unidade' : ' unidades'}`
    }))

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Produtos no Almoxarifado</Heading>

                <div className="w-full mt-3">
                    <Card className="w-full py-3 px-4">
                        <TextInput.Root labelStyle="text-gray-900">
                            <TextInput.Icon>
                                <MagnifyingGlass />
                            </TextInput.Icon>
                            <TextInput.Input id="nome" type="text" placeholder="Pesquisar..." />
                        </TextInput.Root>
                    </Card>

                    <div className="mt-10">
                        <TableListProductWarehouse data={warehouseDTO} />

                        <ProductModal title="Cadastro de Produto" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}