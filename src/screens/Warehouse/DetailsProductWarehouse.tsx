import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { TableListSupplierProduct } from "./TableListSupplierProduct";

export function DetailsProductWarehouse() {
    const location = useLocation();
    const { state } = location;
    const product = state.record;

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
                    {product.supplier_product? <TableListSupplierProduct data={product.supplier_product} /> : ''}
                </div>
            </div>
        </Container>
    )
}