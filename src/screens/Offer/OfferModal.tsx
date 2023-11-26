import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { boolean, object, string } from 'yup';

export function OfferModal({ action, optionsTrigger, title }: ModelModalProp) {
    const validationSchema = object({
        offer: string().required('Descrição da oferta é obrigatória'),
        checkService: boolean(),
        checkProduct: boolean(),
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
                <CardModal title={title} action={action} optionsTrigger={optionsTrigger}>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">

                            <Field name="offer" render={({ input, meta }) => (
                                <TextInput.Root labelFor="offer" labelText="Descrição" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="offer" type="text" placeholder="Descreva essa oferta..." {...input} />
                                </TextInput.Root>
                            )} />

                            <div>
                                <Text>Tipo de Oferta</Text>
                                <div className="flex w-full gap-12">
                                    <Field
                                        name="checkService"
                                        type="checkbox"
                                        render={({ input: { value, onChange, type, ...input }, meta }) => (
                                            <>
                                                <label htmlFor="checkService" className="flex items-center gap-2 my-2">
                                                    <Checkbox
                                                        id="checkService"
                                                        checked={!!value}
                                                        onCheckedChange={checked => onChange(checked)}
                                                        {...input}
                                                    />
                                                    {meta.touched && meta.error && <Text className="h-12 w-full !text-red-900" size="sm">{meta.error}</Text>}
                                                    <Text size="sm">
                                                        Serviço
                                                    </Text>
                                                </label>
                                            </>
                                        )}
                                    />


                                    <Field
                                        name="checkProduct"
                                        type="checkbox"
                                        render={({ input: { value, onChange, type, ...input }, meta }) => (
                                            <>
                                                <label htmlFor="checkProduct" className="flex items-center gap-2 my-2">
                                                    <Checkbox
                                                        id="checkProduct"
                                                        checked={!!value}
                                                        onCheckedChange={checked => onChange(checked)}
                                                        {...input}
                                                    />
                                                    {meta.touched && meta.error && <Text className="h-12 w-full !text-red-900" size="sm">{meta.error}</Text>}
                                                    <Text size="sm">
                                                        Produto
                                                    </Text>
                                                </label>
                                            </>
                                        )}
                                    />

                                </div>
                            </div>

                            <Button className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`} textSize="sm" textStyle="text-gray-100" disabled={submitting}>
                                {submitting ? "Enviando..." : action}
                            </Button>

                        </div>
                    </form>
                </CardModal>
            )} />
    )
}