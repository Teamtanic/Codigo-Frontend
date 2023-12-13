import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { DropFile } from "../../components/DropFile";
import { Form, Field } from "react-final-form";
import { InferType, mixed, object, string } from "yup";
import { Select, SelectOption } from "../../components/Select";
import { useEffect, useState } from "react";
import {
  createDocument,
  getAllDocumentTypes,
} from "../../services/Document/apiService";
import { DocumentType } from "../../services/Document/types";
import { TextInput } from "../../components/TextInput";

const validationSchema = object({
  documentTypeId: string().required("O tipo de documento é obrigatório"),
  file: mixed().required(),
  title: string().required(),
  description: string().required(),
});

type FormType = Prettify<
  Omit<InferType<typeof validationSchema>, "file"> & { file: File }
>;

export function DocumentModal({ action, title }: ModelModalProp) {
  const [loading, setLoading] = useState(false);
  const [documentTypes, setDocumentTypes] = useState<DocumentType[]>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const documentTypeOptions: SelectOption[] =
    documentTypes?.map((type) => ({
      value: type.id,
      label: type.name,
    })) || [];

  const onSubmit = async (values: FormType) => {
    try {
      setLoading(true);
      const res = await createDocument({
        ...values,
        folderPath: decodeURIComponent(pathname.substring(12)),
      });

      navigate("/documento/" + res.data.id);
    } catch (error) {
      console.error("Não foi possível cadastrar documento:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getAllDocumentTypes();
      setDocumentTypes(res.data);
    })();
  }, []);

  return (
    <Form<FormType>
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
              <Field
                name="title"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="title"
                    labelText="Título"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="title"
                      type="text"
                      placeholder="Digite o título..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="description"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="description"
                    labelText="Descrição"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="description"
                      type="text"
                      placeholder="Digite a descrição..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="documentTypeId"
                render={({ input, meta }) => (
                  <Select
                    labelFor="documentTypeId"
                    labelText="Tipo de documento"
                    placeHolder="Selecione o tipo de documento"
                    options={documentTypeOptions}
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="file"
                render={({ input, meta }) => (
                  <DropFile
                    labelText="Documento"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting || loading}
              >
                {submitting || loading ? "Enviando..." : action}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  );
}
