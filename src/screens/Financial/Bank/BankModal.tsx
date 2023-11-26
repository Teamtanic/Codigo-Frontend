import { Button } from "../../../components/Button";
import { CardModal, ModelModalProp } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { object, string } from 'yup';

export function BankModal({ action, optionsTrigger, title }: ModelModalProp) {
    const validationSchema = object({
        name: string().required('Nome do banco é obrigatória'),
        location: string().required('A localização é obrigatória'),
        balance: string().required('O saldo é obrigatório'),
    });

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
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
                <CardModal title={title} action={ action } optionsTrigger={optionsTrigger}>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
                            <Field name="name" render={({ input, meta }) => (
                                <TextInput.Root labelFor="name" labelText="Nome" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="name" type="text" placeholder="Digite o banco..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="location" render={({ input, meta }) => (
                                <TextInput.Root labelFor="location" labelText="Localização" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="location" type="number" min="0" placeholder="Digite a localização..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="balance" render={({ input, meta }) => (
                                <TextInput.Root labelFor="balance" labelText="Saldo" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="balance" type="text" placeholder="Informe o saldo na conta..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Button className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`} textSize="sm" textStyle="text-gray-100" disabled={submitting}>
                                {submitting ? "Enviando..." : action}
                            </Button>
                        </div>
                    </form>
                </CardModal>
            )} />
    )
}