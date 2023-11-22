import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { DropFile } from "../../components/DropFile";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from 'react-final-form';
import { object, string } from 'yup';


export function DocumentModal({ action, title }: ModelModalProp) {
    const validationSchema = object({
        companyRelationship: string(),
        user: string(),
        project: string(),
        doc_type: string().required('O tipo de documento é obrigatório'),
        files: string().required('Documento é obrigatório')
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
                <CardModal title={title} action={action}>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">

                            <Field name="companyRelationship" render={({ input, meta }) => (
                                <TextInput.Root labelFor="companyRelationship" labelText="Empresa relacionada" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="companyRelationship" type="text" placeholder="Informe a empresa..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="user" render={({ input, meta }) => (
                                <TextInput.Root labelFor="user" labelText="Usuário relacionado" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="user" type="text" min="0" placeholder="Informe o usuário..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="project" render={({ input, meta }) => (
                                <TextInput.Root labelFor="project" labelText="Projeto relacionado" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="project" type="text" placeholder="Informe o projeto relacionado..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="doc_type" render={({ input, meta }) => (
                                <TextInput.Root labelFor="doc_type" labelText="Tipo de documento" error={meta.touched && meta.error ? meta.error : undefined}>
                                    <TextInput.Input id="doc_type" type="text" placeholder="Insira o tipo de documento..." {...input} />
                                </TextInput.Root>
                            )} />

                            <Field name="files" render={({ input, meta }) => (
                                <DropFile id="files" labelText="Documentos" error={meta.touched && meta.error ? meta.error : undefined} {...input} />
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