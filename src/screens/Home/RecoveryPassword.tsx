import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextInput } from "../../components/TextInput";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import logo from "../../../public/guara-logo.png";

function PasswordRecovey() {

    return (
        <div className="flex flex-col sm:items-end items-center h-full w-full">
            <div className="flex justify-center flex-col items-center sm:w-fit w-full h-full bg-green-300 ">
                <div className="flex justify-around h-[600px] items-center flex-col sm:px-32">
                    <img src={logo} className="h-[312px] translate-x-6 w-fit -mb-8"></img>
                    <Heading size="lg" className="font-normal">GuaráRP</Heading>
                    <Heading>Recuperação de senha</Heading>

                    <TextInput.Root labelFor="text" labelText="E-mail">
                        <TextInput.Icon>
                            <EnvelopeClosedIcon/>
                        </TextInput.Icon>
                        <TextInput.Input placeholder="Insira seu texto" />
                    </TextInput.Root>
                    
                    <Button className="bg-emerald-500 text-zinc-50">Enviar solicitação</Button>
                    <Button className="bg-emerald-500 text-zinc-50">Voltar</Button>
                </div>
            </div>
        </div>
    );
}

export default PasswordRecovey;