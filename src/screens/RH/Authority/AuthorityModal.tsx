import { Button } from "../../../components/Button";
import { CardModal, ModelModalProp } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { object, string } from 'yup';

export function AuthorityModal({ action, title }: ModelModalProp) {
    const validationSchema = object({
        role: string().required('Cargo é obrigatório'),
        department: string().required('Departamento é obrigatório'),
        privilege: string().required('Privilégio é obrigatório'),
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
                <CardModal title={title} action={action} >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">

                            <Field name="role" render={({ input, meta }) => (
                                <TextInput.Root labelFor="role" labelText="Cargo do usuário" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="role" type="text" placeholder="Digite o cargo..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="department" render={({ input, meta }) => (
                                <TextInput.Root labelFor="department" labelText="Departamento do usuário" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="department" type="text" placeholder="Digite o departamento..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="privilege" render={({ input, meta }) => (
                                <TextInput.Root labelFor="privilege" labelText="Privilégio do usuário" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="privilege" type="text" placeholder="Informe o privilégio do usuário..." {...input} />
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