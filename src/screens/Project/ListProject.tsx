import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from 'phosphor-react';
import { ProjectProps, TableListProject } from "./TableListProject"
import { ProjectModal } from "./ProjectModal";

export function ListProject() {
    var projects = [
        {
            id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", title: "Titulo", description: "Análise e Desenvolvimento de Sistemas", status: true, customer: "McDonalds",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", title: "Titulo", description: "Turismo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut sem nulla. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. A lacus vestibulum sed arcu non odio euismod. Nam at lectus urna duis convallis convallis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nec tincidunt praesent semper feugiat. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Eu mi bibendum neque egestas congue quisque egestas. Sit amet massa vitae tortor condimentum lacinia quis vel. Facilisis gravida neque convallis a. Et tortor at risus viverra. Aenean euismod elementum nisi quis eleifend quam adipiscing. Ultrices sagittis orci a scelerisque purus semper. Et malesuada fames ac turpis egestas maecenas pharetra. Curabitur vitae nunc sed velit.", status: true, customer: "Usiminas",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", title: "Titulo", description: "Letras", status: false, customer: "Interpol",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "3f506407-4638-4bd0-abb9-d2bcf415239c", title: "Titulo", description: "Automação Industrial", status: true, customer: "BOPE",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", title: "Titulo", description: "Matemática", status: false, customer: "Burger King",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "277dc916-e89e-444d-ac02-3bab065e488d", title: "Titulo", description: "Ciência da Computação", status: false, customer: "EMTU",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", title: "Titulo", description: "Geografia", status: false, customer: "McDonalds",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", title: "Titulo", description: "Análise e Desenvolvimento de Sistemas", status: true, customer: "McDonalds",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", title: "Titulo", description: "Turismo", status: true, customer: "Usiminas",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", title: "Titulo", description: "Letras", status: false, customer: "Interpol",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "3f506407-4638-4bd0-abb9-d2bcf415239c", title: "Titulo", description: "Automação Industrial", status: true, customer: "BOPE",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", title: "Titulo", description: "Matemática", status: false, customer: "Burger King",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "277dc916-e89e-444d-ac02-3bab065e488d", title: "Titulo", description: "Ciência da Computação", status: false, customer: "EMTU",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
        {
            id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", title: "Titulo", description: "Geografia", status: false, customer: "McDonalds",
            employees: [
                { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", name: "Paulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo AndradePaulo Andrade", role: "Funcionario", department: "RH" },
                { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", name: "Marcelo Cabelinho", role: "Funcionario", department: "Financeiro" },
                { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", name: "Marcos ", role: "Chefe", department: "Financeiro" },
                { id: "3f506407-4638-4bd0-abb9-d2bcf415239c", name: "Maria Marieta", role: "Chefe", department: "ADM" },
                { id: "78e1efba-f2d1-473c-b656-8f70c9e8a94c", name: "Laura ", role: "Funcionario", department: "Almoxarifado" },
                { id: "277dc916-e89e-444d-ac02-3bab065e488d", name: "Luan ", role: "Supervisor", department: "ADM" },
                { id: "7ab0ac84-4500-4d68-907c-1ef5ed21d9ad", name: "Franciele ", role: "Supervisor", department: "RH" },
            ],
            company: [
                { id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", name: 'MCDONALDS', relation: 'FORNECEDOR', code: "61556481000100", telephone: "1334684219", cell_phone: "13997854230", email: "emailEmpresa@gmail.com" },

            ],
            offer: [{
                id: "d5d6be6e-d332-41be-b601-8bd2ae4e6935", description: "Desenvolvimento de sistema web", type: "SERVICO", projects: [
                    { id: "75b6a6f8-88fb-4642-bd79-60cd4865691c", description: "Pagamento de projeto", customer: "McDonalds", status: "Em andamento" },
                    { id: "ad24ccc1-efe2-4b17-8bbe-05a4e730b12a", description: "Compra de serviço", customer: "BOPE", status: "Fechado" },
                    { id: "f5537fec-16f2-452b-a6e4-4e60d36f5686", description: "Venda de produto", customer: "Burger King", status: "Fechado" },
                ]
            }]
        },
    ];

    const projectsDTO: ProjectProps[] = projects.map(project => ({
        ...project,
        status: project.status === true ? 'Em aberto' : 'Fechado'
    }))

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
                <Heading size="lg">Projetos</Heading>

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
                        <TableListProject data={projectsDTO} />

                        <ProjectModal title="Cadastro de Projeto" action="Adicionar" />
                    </div>
                </div>
            </div>

        </Container>
    )
}