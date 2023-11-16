import { ModalOptions } from "../../components/OptionsMenu";
import { Column, Table } from "../../components/Table";
import { ProductEditModal } from "./ProductEditModal";

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

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <ProductEditModal />
        }
    ]


    return (
        <Table data={data} columns={columns} options={options} />
    )
}