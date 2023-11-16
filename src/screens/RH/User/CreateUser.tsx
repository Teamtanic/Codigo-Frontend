import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";

export function CreateUser() {
    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 items-center p-24 max-md:p-6 flex-col">
                <Heading size="lg">Cadastro Usuário</Heading>


                <div className="mt-10 gap-4 flex flex-col w-2/4">
                    <TextInput.Root labelFor="email" labelText="Email">
                        <TextInput.Input id="email" type="text" placeholder="Digite o email..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="login" labelText="Login">
                        <TextInput.Input id="login" type="text" placeholder="Digite o login..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="name" labelText="Nome">
                        <TextInput.Input id="name" type="text" placeholder="Digite o nome..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="prontuary" labelText="Prontuário">
                        <TextInput.Input id="prontuary" type="text" placeholder="Digite o prontuário..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="password" labelText="Senha">
                        <TextInput.Input id="password" type="text" placeholder="Digite a senha..." />
                    </TextInput.Root>
                    <TextInput.Root labelFor="confirm-password" labelText="Confirme a senha">
                        <TextInput.Input id="confirm-password" type="text" placeholder="Confirme a senha..." />
                    </TextInput.Root>

                    <Button className="mt-4 " >
                        <Text className="text-gray-100">
                            Cadastrar
                        </Text>
                    </Button>
                </div>
            </div>
        </Container>
    );
}