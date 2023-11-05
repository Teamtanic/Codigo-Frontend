import { Table } from "../../components/Table";

export function TableListCompany(){
    var empresas = [
        { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'fornecedor', code: "61556481000100" },
        { id: "37514f28-11af-4ef5-aae9-6054d8250fdd", name: 'Burger King', relation: 'fornecedor', code: '48820178000105' },
        { id: "50ef8007-a694-4617-861e-98ac87ca2a31", name: 'Vivara', relation: 'fornecedor', code: "54365277600" },
        { id: "bfdfe8f5-500b-4b7a-83ec-0fbb33fb63b6", name: 'Posto Ipiranga', relation: 'cliente', code: '48820178000105' },
        { id: "7ba0b55a-0c52-4d13-bb0f-841121582f35", name: 'Microsoft', relation: 'fornecedor', code: "85445832023" },
        { id: "4d19e455-9725-435f-96f4-c0d0a684a202", name: 'Microsoft', relation: 'fornecedor', code: "48820178000105" }
    ];

    var columns = [
        { key: 'id', heading: 'ID', copiableId: true },
        { key: 'name', heading: 'Nome' },
        { key: 'relation', heading: 'Relação' },
        { key: 'code', heading: 'Código' },
    ];

    return (
        <Table data={empresas} columns={columns} />
    )
}