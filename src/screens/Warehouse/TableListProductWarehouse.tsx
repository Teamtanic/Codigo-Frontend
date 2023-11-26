import { ModalOptions } from "../../components/OptionsMenu";
import { Column, Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { ProductModal } from "./ProductModal";

export interface ProductWarehouseProps {
    id: string,
    product: string,
    quantity: number
}

export function TableListProductWarehouse({data} : {data : ProductWarehouseProps[]}) {
    var columns : Column<ProductWarehouseProps>[] = [
        { key: 'product', title: 'Produto' },
        { key: 'quantity', title: 'Quantidade', render: ({quantity}) => <Text className="!text-gray-900">{quantity} {quantity === 1 ? ' unidade' : ' unidades'}</Text> },
    ];

    var options: ModalOptions[] = [
        {
            key: 'Editar', children:
                <ProductModal title="Editar Produto" action="Editar" optionsTrigger />
        }
    ]


    return (
        <Table link="produto" data={data} columns={columns} options={options} />
    )
}