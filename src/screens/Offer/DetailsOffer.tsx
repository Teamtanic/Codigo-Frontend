import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { TableListProject } from "../Project/TableListProject";

export function DetailsOffer() {
    var offer =
    {
        id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "PRODUTO",
        projects: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
        ]
    };

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Detalhes Oferta</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{offer.description}</Text>
                            </div>

                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                                <Text className="!text-gray-900 font-semibold">Tipo de oferta: {offer.type}</Text>
                        </div>
                    </div>
                </Card>

                <div className="mt-10">
                    <Heading >Projetos</Heading>
                    <TableListProject data={offer.projects} />
                </div>
            </div>
        </Container>
    )
}