import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Heading } from "../../../components/Heading";
import { Navbar } from "../../../components/Navbar";
import { Text } from "../../../components/Text";
import { TextInput } from "../../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { object, string } from 'yup';
import { UserRegisterRequest } from "../../../services/User/types";
import { createUser } from "../../../services/User/apiService";

export function CreateUser() {
    const validationSchema = object({
        name: string().required('Nome é obrigatório'),
        email: string().email('Insira um e-mail válido').required('E-mail é obrigatório'),
        login: string().required('Login é obrigatório'),
        prontuary: string().required('Prontuário é obrigatório'),
        password: string().required('Senha é obrigatório'),
        'confirm-password': string().required('Necessário confirmar a senha')
    });

    const onSubmit = async (values: any) => {
        try {
            const userData: UserRegisterRequest = {
                name: values.name,
                email: values.email,
                login: values.login,
                prontuary: values.prontuary,
                password: values.password,
                telephone: "",
                cell_phone: "" 
            };
            
            await createUser(userData);

            console.log(userData);
        } catch (error){
            console.error(error);
        }
    };

    return (
        <Container>
            <Navbar />
            <div className="w-full flex py-6 items-center p-24 max-md:p-6 flex-col">
                <Heading size="lg">Cadastro Usuário</Heading>

                <Form
                    onSubmit={onSubmit}
                    validate={(values) => {
                        try {
                            validationSchema.validateSync(values, { abortEarly: false });
                        } catch (err: any) {
                            return err.inner.reduce((errors: any, error: any) => {
                                return { ...errors, [error.path]: error.message };
                            }, {});
                        }
                    }}
                    render={({ handleSubmit, submitting }) => (
                        <div className="mt-10 w-2/4">
                                <form onSubmit={handleSubmit} className="gap-6 flex flex-col">

                                <Field name="email" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="email" labelText="Email" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="email" type="text" placeholder="Digite o email..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Field name="login" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="login" labelText="Login" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="login" type="text" placeholder="Digite o login..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Field name="name" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="name" labelText="Nome" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="name" type="text" placeholder="Digite o nome..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Field name="prontuary" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="prontuary" labelText="Prontuário" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="prontuary" type="text" placeholder="Digite o prontuário..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Field name="password" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="password" labelText="Senha" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="password" type="text" placeholder="Digite a senha..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Field name="confirm-password" render={({ input, meta }) => (
                                    <TextInput.Root labelFor="confirm-password" labelText="Confirme a senha" error={meta.touched && meta.error ? meta.error : undefined}>
                                        <TextInput.Input id="confirm-password" type="text" placeholder="Confirme a senha..." {...input} />
                                    </TextInput.Root>
                                )} />

                                <Button className="mt-4 " >
                                    <Text className="text-gray-100">
                                    {submitting ? "Enviando..." : "Cadastrar"}
                                    </Text>
                                </Button>
                        </form>
                            </div>
                    )} />
            </div>
        </Container>

    )
}