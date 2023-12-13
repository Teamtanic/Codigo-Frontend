import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from "react-final-form";
import { object, string, boolean } from "yup";
import {
  CompanyCreateRequest,
  CompanyResponse,
  CompanyUpdateRequest,
} from "../../services/Company/types";
import { BusinessRelationshipType } from "../../services/CompanyRelationship/types";
import {
  createCompany,
  editCompany,
  getCompanyById,
} from "../../services/Company/apiService";
import { useNavigate } from "react-router-dom";
import { HttpStatusCode } from "axios";
import { createUpdateObject } from "../../utils";

interface CompanyFormProps {
  name: string;
  cpf: string;
  cnpj: string;
  email: string;
  telephone?: string;
  cell_phone?: string;
  checkCustomer?: string;
  checkSupplier?: string;
}

export function CompanyModal({
  action,
  optionsTrigger,
  title,
  mode = "create",
  data,
  triggerStyle,
  iconTrigger,
}: ModelModalProp & { data?: CompanyResponse }) {
  let navigate = useNavigate();

  const validationSchema = object({
    name: string().required("Nome é obrigatório"),
    cpf: string(),
    cnpj: string(),
    email: string()
      .email("Insira um e-mail válido")
      .required("E-mail é obrigatório"),
    telephone: string(),
    cell_phone: string(),
    checkCustomer: boolean(),
    checkSupplier: boolean(),
  });

  const onSubmit = async (values: CompanyFormProps) => {
    try {
      let isCustomer: BusinessRelationshipType | undefined =
        values.checkCustomer ? BusinessRelationshipType.CLIENTE : undefined;

      let isSupplier: BusinessRelationshipType | undefined =
        values.checkSupplier ? BusinessRelationshipType.FORNECEDOR : undefined;

      const businessRelationshipTypeArray: BusinessRelationshipType[] = [
        isCustomer,
        isSupplier,
      ].filter((type): type is BusinessRelationshipType => type !== undefined);

      const companyData: CompanyCreateRequest = {
        name: values.name,
        cnpj: values.cnpj,
        cpf: values.cpf,
        email: values.email,
        telephone: values.telephone,
        cell_phone: values.cell_phone,
        businessRelationshipType: businessRelationshipTypeArray,
      };

      if (mode === "create") {
        const res = await createCompany(companyData);
        navigate(`/empresa/${res.data.id}`, { state: { record: res.data } });
      } else if (mode === "edit") {
        if (data) {
          const updateCompanyData: CompanyUpdateRequest = createUpdateObject(
            data,
            companyData
          );
          let editResponse = await editCompany(updateCompanyData, data.id);
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getCompanyById(data.id);
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: CompanyResponse = updateResponse.data;
              navigate(`/empresa/${data.id}`, { state: { record } });
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  let initialValues = {};
  if (data) {
    initialValues = {
      id: data.id,
      name: data.name,
      cpf: data.cpf ?? undefined,
      cnpj: data.cnpj ?? undefined,
      checkCustomer: data.companyRelationships.some(
        (relationship) =>
          relationship.businessRelationship === "CLIENTE" && relationship.active
      ),
      checkSupplier: data.companyRelationships.some(
        (relationship) =>
          relationship.businessRelationship === "FORNECEDOR" &&
          relationship.active
      ),
      email: data.contact[0].email ?? undefined,
      telephone: data.contact[0].telephone ?? undefined,
      cell_phone: data.contact[0].cell_phone ?? undefined,
    };
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
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
        <CardModal
          title={title}
          action={action}
          optionsTrigger={optionsTrigger}
          triggerStyle={triggerStyle}
          iconTrigger={iconTrigger}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col w-full max-md:px-12 md:px-24 gap-4">
              <Field
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Nome da Empresa"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o nome..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="cpf"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="cpf"
                    labelText="CPF"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="cpf"
                      type="text"
                      placeholder="Digite o código..."
                      mask="999.999.999-99"
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="cnpj"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="cnpj"
                    labelText="CNPJ"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="cnpj"
                      type="text"
                      placeholder="Digite o código..."
                      mask="99.999.999/9999-99"
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="email"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="email"
                    labelText="E-mail"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="email"
                      type="text"
                      placeholder="Digite o e-mail..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="telephone"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="telephone"
                    labelText="Tefone"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="telephone"
                      type="text"
                      placeholder="(99) 9999-9999"
                      mask="(99) 9999-9999"
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="cell_phone"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="cell_phone"
                    labelText="Celular"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="cell_phone"
                      type="text"
                      mask="(99) 99999-9999"
                      placeholder="(99) 99999-9999"
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <div>
                <Text>Relação da Empresa</Text>
                <div className="flex w-full gap-12">
                  <Field
                    name="checkCustomer"
                    type="checkbox"
                    render={({
                      input: { value, onChange, type, ...input },
                      meta,
                    }) => (
                      <>
                        <label
                          htmlFor="checkCustomer"
                          className="flex items-center gap-2 my-2"
                        >
                          <Checkbox
                            id="checkCustomer"
                            checked={!!value}
                            onCheckedChange={(checked) => onChange(checked)}
                            {...input}
                          />
                          {meta.touched && meta.error && (
                            <Text
                              className="h-12 w-full !text-red-900"
                              size="sm"
                            >
                              {meta.error}
                            </Text>
                          )}
                          <Text size="sm">Cliente</Text>
                        </label>
                      </>
                    )}
                  />

                  <Field
                    name="checkSupplier"
                    type="checkbox"
                    render={({
                      input: { value, onChange, type, ...input },
                      meta,
                    }) => (
                      <>
                        <label
                          htmlFor="checkSupplier"
                          className="flex items-center gap-2 my-2"
                        >
                          <Checkbox
                            id="checkSupplier"
                            checked={!!value}
                            onCheckedChange={(checked) => onChange(checked)}
                            {...input}
                          />
                          {meta.touched && meta.error && (
                            <Text
                              className="h-12 w-full !text-red-900"
                              size="sm"
                            >
                              {meta.error}
                            </Text>
                          )}
                          <Text size="sm">Fornecedor</Text>
                        </label>
                      </>
                    )}
                  />
                </div>
              </div>

              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : action}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  );
}
