import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { CardModal } from "../../../components/CardModal";
import { TableListTransaction, TransactionProps } from "./TableListTransaction";
import { amountMask } from "../../../utils";
import { TransactionAddModal } from "./TransactionAddModal";




export function ListTransaction() {
    var transactions = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", description: "Venda de produto", amount: 150.45, type: "ENTRADA", dt_cashflow: "20/10/2023" },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", description: "Compra de equipamentoequipamentoequipamentoequipamentoequipamentoequipamento", amount: 50.25, type: "SAIDA", dt_cashflow: "07/10/2023" },
        { id: "277dc916-e89e-444d-ac02-3bab065e488d", description: "Venda de produto", amount: 17.99, type: "ENTRADA", dt_cashflow: "01/10/2023" },
        { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", description: "Compra de equipamento", amount: 46788.99, type: "SAIDA", dt_cashflow: "01/10/2023" },
    ];

    var transactionsDTO : TransactionProps[] = transactions.map(transaction => ({
        ...transaction,
        amount: amountMask(transaction.amount)
    }));

    
    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Transações</Heading>

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
                        <TableListTransaction data={transactionsDTO} />

                        <TransactionAddModal />
                    </div>
                </div>
            </div>

        </Container>
    )
}