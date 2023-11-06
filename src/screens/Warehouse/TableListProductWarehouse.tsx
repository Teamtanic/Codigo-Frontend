import { DataProps, Table } from "../../components/Table";

export function TableListProductWarehouse({data} : DataProps) {
    var columns = [
        { key: 'product', heading: 'Produto' },
        { key: 'quantity', heading: 'Quantidade' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}