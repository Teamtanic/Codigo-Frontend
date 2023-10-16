import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Checkbox } from "../../components/Checkbox";
import { Card } from "../../components/Card"
import { Navbar } from "../../components/Navbar"
import { SidebarMenu } from "../../components/SidebarMenu"
import { Container } from "../../components/Container";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import logo from '/guara-logo.png';
import { Select } from "../../components/Select";

function Home() {
    var options = [
        {value: "teste", label: "Um teste"},
        {value: "mi", label: "Milho!"},
        {value: "café", label: "Café"}
    ];

    var acesso = [
      {label: "RH", link:"/teste", notify: 3},
      {label: "Projetos", link:"/teste"}
    ];
    return (
        <Container>
            <Navbar/>
            <SidebarMenu menuItems={acesso} />

            <Card className="bg-blue-300">
                <div >
                    <Text>Teste</Text>
                </div>
            </Card>
            <Card className="bg-zinc-500 rounded-bl-none">
                <div className="bg-zinc-900 w-[120px] h-[120px]">
                </div>
            </Card>
            <div className="flex justify-center flex-col items-center h-full mr-0 ml-auto bg-green-300">
                {
                /* Botar minimo depois */
                }
                <Select placeHolder="Escolha sua opção" options={options} />
                <div className="flex justify-center items-center flex-col px-32">
                    <img src={logo} className="h-[312px] translate-x-6 w-fit"></img>
                    <Heading size="lg" className="font-normal">GuaráRP</Heading>
                    <Heading size="md">Empresas md Heading 28</Heading>
                    <Heading>Empresas md Heading 28</Heading>
                    <Heading size="sm">Empresas sm Heading 20</Heading>
                    <Text size="md">Empresas md Text 18</Text>
                    <Text>Empresas md Text 18</Text>
                    <Text size="sm">Empresas sm Text 16</Text>
                    <Text size="xm">Empresas xm Text 14</Text>
                    <TextInput.Root labelFor="text" labelText="Texto">
                        <TextInput.Icon>
                            <EnvelopeClosedIcon/>
                        </TextInput.Icon>
                        <TextInput.Input id="text" type="text" placeholder="Insira seu texto" />
                        <TextInput.Icon>
                            <EnvelopeClosedIcon/>
                        </TextInput.Icon>
                    </TextInput.Root>
                    
                    <label htmlFor="check" className="flex items-center gap-2 my-2">
                        <Checkbox id="check" />
                        <Text size="sm">
                            Checkbox
                        </Text>
                    </label>
                    <Button className="bg-emerald-500 text-zinc-50">Botão</Button>
                </div>
            </div>
        </Container>
    );
}

export default Home;