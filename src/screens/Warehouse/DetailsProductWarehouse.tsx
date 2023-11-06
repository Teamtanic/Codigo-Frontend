import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { amountMask } from "../../utils";
import { TableListSupplierProduct } from "./TableListSupplierProduct";

export function DetailsProductWarehouse() {
    var product =
    {
        id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", product: "Cadeira", quantity: 12,
        supplier_product: [
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", supplier: "Casas Bahia", price: 99.99 },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", supplier: "Magazine Luiza", price: 110.10 },
            { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", supplier: "Pichau", price: 150.77 },
            { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", supplier: "Microsoft", price: 1349.99 },
        ]
    }

    var productDTO = {
        ...product,
        supplier_product: product.supplier_product.map(item => ({
            ...item,
            price: amountMask(item.price)
        }))
    }

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Detalhes Produto</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{product.product}</Text>
                            </div>

                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                            <div>
                                <Text className="!text-gray-900 font-semibold">Total no estoque: </Text>
                                <Text className="!text-gray-900">{product.quantity}</Text>
                            </div>

                        </div>
                    </div>
                </Card>

                <div className="mt-10 ">
                    <Heading>Valores Pagos Anteriormente</Heading>
                    <TableListSupplierProduct data={productDTO.supplier_product} />
                </div>
            </div>
        </Container>
    )
}