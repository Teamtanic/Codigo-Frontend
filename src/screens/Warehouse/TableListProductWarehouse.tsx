import { Column, Table } from "../../components/Table";

export interface ProductWarehouseProps {
    id: string,
    product: string,
    quantity: string
}

export function TableListProductWarehouse({data} : {data : ProductWarehouseProps[]}) {
    var columns : Column<ProductWarehouseProps>[] = [
        { key: 'product', title: 'Produto' },
        { key: 'quantity', title: 'Quantidade' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}