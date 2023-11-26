import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { TextInput } from "../../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { TableListBank } from "./TableListBank";
import { amountMask } from "../../../utils";
import { BankModal } from "./BankModal";

interface BankProps {
    id: string;
    name: string;
    balance: string;
}

export function ListBank() {
    var banks = [
        { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Itaú", balance: 12450.45, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ] },
        { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Santander", balance: 320.50, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ] },
        { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Caixa", balance: 1103.77, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ] },
        { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Banco do Brasil", balance: 150.32, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ] },
        { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Nubank", balance: 5.23, location: 'Rua Barão de Maua, 721',
        transactions: [
            { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", amount: 1200.25, type: "ENTRADA", dt_cashflow: "10/11/2023" },
            { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", amount: 90.34, type: "SAIDA", dt_cashflow: "04/11/2023" },
            { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", amount: 114.99, type: "ENTRADA", dt_cashflow: "27/10/2023" },
        ] },
    ];

    var banksDTO : BankProps[] = banks.map(bank => ({
        ...bank,
        balance: amountMask(bank.balance)
    }))

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Bancos</Heading>

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
                        <TableListBank data={banksDTO} />

                        <BankModal title="Cadastro de Banco" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}