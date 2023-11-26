import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { number, object, string } from 'yup';

export function ProductModal({ action, optionsTrigger, title }: ModelModalProp) {
    const validationSchema = object({
        product: string().required('Nome é obrigatório'),
        quantity: number().required('Quantidade é obrigatório'),
        supplier: string().required('Fornecedor é obrigatório'),
        price: number().required('Preço é obrigatório')
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
                <CardModal title={title} action={action} optionsTrigger={optionsTrigger} >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">

                            <Field name="product" render={({ input, meta }) => (
                                <TextInput.Root labelFor="product" labelText="Produto" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="product" type="text" placeholder="Digite o produto..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="quantity" render={({ input, meta }) => (
                                <TextInput.Root labelFor="quantity" labelText="Quantidade" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="quantity" type="number" min="0" placeholder="Digite a quantidade..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="supplier" render={({ input, meta }) => (
                                <TextInput.Root labelFor="supplier" labelText="Fornecedor" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="supplier" type="text" placeholder="Informe o fornecedor..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="price" render={({ input, meta }) => (
                                <TextInput.Root labelFor="price" labelText="Preço" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="price" type="text" placeholder="Informe o preço..." {...input} />
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