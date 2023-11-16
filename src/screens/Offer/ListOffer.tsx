import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListOffer } from "./TableListOffer";
import { OfferAddModal } from "./OfferAddModal";

export function ListOffer() {
    var offer = [
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Suporte técnico", type: "SERVICO" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "NOTION PLANNERS", type: "PRODUTO" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", description: "Servidores em nuvem", type: "SERVICO" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", description: "Robô de limpeza", type: "PRODUTO" },
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6999", description: "Desenvolvimento de sistema web", type: "SERVICO" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b199", description: "Suporte técnico", type: "SERVICO" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5699", description: "NOTION PLANNERS", type: "PRODUTO" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a999", description: "Servidores em nuvem", type: "SERVICO" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf4152399", description: "Robô de limpeza", type: "PRODUTO" },
    ];

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Ofertas</Heading>

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
                        <TableListOffer data={offer} />

                        <OfferAddModal />
                    </div>
                </div>
            </div>

        </Container>
    )
}