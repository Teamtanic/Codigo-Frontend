import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Logo } from "../../../components/Logo";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import ThemeToggle from "../../../components/ThemeToggle";

export function Login() {
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
                        <Heading className="!text-gray-800">Entrar</Heading>
                    </div>
                    <div className="mt-4 gap-4 flex flex-col w-full">
                        <TextInput.Root labelFor="login" labelText="Login" labelStyle="!text-gray-800">
                            <TextInput.Input id="login" type="text" placeholder="Digite o login..." />
                        </TextInput.Root>
                        <TextInput.Root labelFor="password" labelText="Senha" labelStyle="!text-gray-800">
                            <TextInput.Input id="password" type="text" placeholder="Digite a senha..." />
                        </TextInput.Root>

                        <Button className="mt-4 " >
                            <Text className="text-gray-100">
                                Entrar
                            </Text>
                        </Button>
                    </div>
                </Card>
            </div>
        </Container>
    );
}