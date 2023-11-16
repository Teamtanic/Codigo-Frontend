import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Logo } from "../../../components/Logo";
import { TextInput } from "../../../components/TextInput";
import ThemeToggle from "../../../components/ThemeToggle";

export function RecoveryPassword() {
    return (
        <Container hasNav={false}>
            <div className="w-full flex py-6 items-center p-24 max-md:p-6 flex-col z-50">
                <div className="w-[120px] fixed bottom-6 left-6">
                    <ThemeToggle />
                </div>

                <div className="-z-50 fixed">
                    <Logo className="!h-32" />
                </div>

                <div className="mt-16">
                    <Heading size="lg">GuaráRP</Heading>
                </div>

                <Card className="p-6 mt-12 md:w-2/5 w-5/6 bg-gray-200">
                    <div className="w-full flex justify-center">
                        <Heading className="!text-gray-800">Recuperação de Senha</Heading>
                    </div>
                    <div className="mt-4 gap-4 flex flex-col w-full">
                        <TextInput.Root labelFor="text" labelText="E-mail">
                            <TextInput.Icon>
                                <EnvelopeClosedIcon />
                            </TextInput.Icon>
                            <TextInput.Input placeholder="Insira seu texto" />
                        </TextInput.Root>

                        <Button className="bg-emerald-500 text-zinc-50 mt-5">Enviar solicitação</Button>
                        <Button className="bg-emerald-500 text-zinc-50">Voltar</Button>
                    </div>
                </Card>
            </div>
        </Container>
    );
}