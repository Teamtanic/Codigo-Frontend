import { DataProps, Table } from "../../components/Table";

export function TableListSupplierProduct({data} : DataProps) {
    var columns = [
        { key: 'supplier', heading: 'Empresa' },
        { key: 'price', heading: 'Preço' },
    ];

    return (
        <Table data={data} columns={columns} />
    )
}