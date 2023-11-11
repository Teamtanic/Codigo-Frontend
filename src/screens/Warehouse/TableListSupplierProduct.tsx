import { Column, Table } from "../../components/Table";

export interface SupplierProductProps {
    id: string,
    supplier: string,
    price: string
}

export function TableListSupplierProduct({data} : {data : SupplierProductProps[]}) {
    var columns : Column<SupplierProductProps>[] = [
        { key: 'supplier', title: 'Empresa' },
        { key: 'price', title: 'Preço' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}