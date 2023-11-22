import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { TextAreaInput } from "../../components/TextBox";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { object, string } from 'yup';

export function ProjectModal({ action, title }: ModelModalProp) {
    const validationSchema = object({
        title: string().required('Título é obrigatório'),
        description: string().required('Descrição é obrigatória'),
        customer: string(),
        supplier: string(),
        offering: string().required('A oferta oferecida é obrigatória'),
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
                <CardModal title={title} action={ action } >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
                            <Field name="title" render={({ input, meta }) => (
                                <TextInput.Root labelFor="title" labelText="Título" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="title" type="text" placeholder="Digite o título..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="description" render={({ input, meta }) => (
                                <TextAreaInput id="description" labelFor="description"
                                    labelText="Descrição"
                                    placeholder="Dê uma breve descrição do seu projeto..."
                                    error={meta.touched && meta.error ? meta.error : undefined} {...input} />
                            )} />

                            <Field name="customer" render={({ input, meta }) => (
                                <TextInput.Root labelFor="customer" labelText="Cliente" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="customer" type="text" placeholder="Informe o cliente..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="supplier" render={({ input, meta }) => (
                                <TextInput.Root labelFor="supplier" labelText="Fornecedor" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="supplier" type="text" placeholder="Informe o fornecedor..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="offering" render={({ input, meta }) => (
                                <TextInput.Root labelFor="offering" labelText="Serviço ou Produto" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="offering" type="text" placeholder="Informe o serviço ou produto fornecido..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Button className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`} textSize="sm" textStyle="text-gray-100" disabled={submitting}>
                                {submitting ? "Enviando..." : "Adicionar"}
                            </Button>

                        </div>
                    </form>
                </CardModal>
            )} />
    )
}