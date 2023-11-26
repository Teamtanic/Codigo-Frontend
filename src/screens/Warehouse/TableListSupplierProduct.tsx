import { Column, Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { amountMask } from "../../utils";

export interface SupplierProductProps {
    id: string,
    supplier: string,
    price: number
}

export function TableListSupplierProduct({data} : {data : SupplierProductProps[]}) {
    var columns : Column<SupplierProductProps>[] = [
        { key: 'supplier', title: 'Empresa' },
        { key: 'price', title: 'Preço', render: ({price}) => <Text className="!text-gray-900">{amountMask(price)}</Text> },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}