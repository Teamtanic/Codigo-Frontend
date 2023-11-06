import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { amountMask } from "../../../utils";
import { TableListTransaction } from "../Transaction/TableListTransaction";

export function DetailsBank() {
    var bank =
    {
        id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: "Itaú", balance: 12450.45, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ]
    };

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Detalhes Banco</Heading>
                <Card className="w-full !p-0">
                    <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                        <div className="flex flex-col md:w-4/5 p-4 justify-evenly">
                            <div className="w-full flex items-center justify-between">
                                <Text className="!text-gray-900 font-semibold">{bank.name}</Text>
                            </div>

                        </div>
                        <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                            <div>
                                <Text className="!text-gray-900 font-semibold">Total no banco: </Text>
                                <Text className="!text-gray-900">{amountMask(bank.balance)}</Text>
                            </div>

                        </div>
                    </div>
                </Card>

                <div className="mt-10">
                    <Heading >Transações</Heading>
                    <TableListTransaction data={bank.transactions} />
                </div>
            </div>
        </Container>
    )
}