import { Button } from "../../components/Button";
import { CardModal, ModelModalProp } from "../../components/CardModal";
import { TextAreaInput } from "../../components/TextBox";
import { TextInput } from "../../components/TextInput";
import { Form, Field } from "react-final-form";
import { object, string } from "yup";
import {
  ProjectCreateRequest,
  ProjectResponse,
  ProjectUpdateRequest,
} from "../../services/Project/type";
import {
  createProject,
  editProject,
  getProjectById,
} from "../../services/Project/apiService";
import { useEffect, useState } from "react";
import {
  getAllCustomers,
  getAllSuppliers,
  searchCompany,
  searchCompanyCustomer,
  searchCompanySupplier,
} from "../../services/Company/apiService";
import { CompanyResponse } from "../../services/Company/types";
import { Select, SelectOption } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { createUpdateObject } from "../../utils";
import { HttpStatusCode } from "axios";
import {
  CompanyRelationshipProjectResponse,
  CompanyRelationshipResponse,
} from "../../services/CompanyRelationship/types";
import DropdownInput, { Record } from "../../components/DropdownInput";
import { searchOffer } from "../../services/Offering/apiService";
import { OfferingResponse } from "../../services/Offering/types";
import { getUserData } from "../../services/User/utils";

export function ProjectModal({
  action,
  optionsTrigger,
  title,
  mode = "create",
  data,
  triggerStyle,
  iconTrigger,
}: ModelModalProp & { data?: ProjectResponse }) {
  let navigate = useNavigate();

  const validationSchema = object({
    title: string().required("Título é obrigatório"),
    description: string().required("Descrição é obrigatória"),
    customer: string(),
    supplier: string(),
    offering: string().required("A oferta oferecida é obrigatória"),
  });

  let userInfo = getUserData();

  const onSubmit = async (values: any) => {
    try {
      const projectData: ProjectCreateRequest = {
        title: values.title,
        description: values.description,
        companyRelationshipIds: [],
        offeringIds: [],
        users: [
          {
            userId: userInfo?.userId,
            role: "ADM",
          },
        ],
      };

      if (values.customer) {
        projectData.companyRelationshipIds.push(values.customer);
      }

      if (values.supplier) {
        projectData.companyRelationshipIds.push(values.supplier);
      }

      if (values.offering) {
        projectData.offeringIds.push(values.offering);
      }

      console.log(projectData);
      if (mode === "create") {
        const res = await createProject(projectData);
        navigate(`/projeto/${res.data.id}`, { state: { record: res.data } });
      } else if (mode === "edit") {
        if (data) {
          console.log(data);
          const updateCompanyData: ProjectUpdateRequest = createUpdateObject(
            data,
            projectData
          );
          let editResponse = await editProject(updateCompanyData, data.id);
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getProjectById(data.id);
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: ProjectResponse = updateResponse.data;
              navigate(`/projeto/${data.id}`, { state: { record } });
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [initialValues, setInitialValues] = useState<any>({});

  useEffect(() => {
    if (data) {
      setInitialValues({
        id: data.id,
        title: data.title,
        description: data.description,
        customerRelationship:
          findRelationshipIdByType(data.companyRelationships, "CLIENTE") || "",
        supplierRelationship:
          findRelationshipIdByType(data.companyRelationships, "FORNECEDOR") ||
          "",
        offering: data.offerings[0].description,
      });
    } else {
      setInitialValues({});
    }
  }, []);

  function findRelationshipIdByType(
    companyRelationships: CompanyRelationshipProjectResponse[],
    type: string
  ): SelectOption | undefined {
    const relationship: CompanyRelationshipProjectResponse | undefined =
      companyRelationships.find((item) => item.businessRelationship === type);

    let option = {
      value: relationship?.idCompanyRelationship,
      label: relationship?.company.name,
    };

    return relationship ? { ...option } : undefined;
  }

  const searchFunctionCompanyCustomer = async (query: string) => {
    const response = await searchCompanyCustomer(query);
    const data = response.data.content;

    const clientCompanies = data.filter((item: CompanyResponse) =>
      item.companyRelationships.some(
        (cr) => cr.businessRelationship === "CLIENTE"
      )
    );

    const options: Record[] = clientCompanies.map((item: CompanyResponse) => ({
      label: item.name,
      value: item.companyRelationships
        .filter((cr) => cr.businessRelationship === "CLIENTE")
        .map((cr) => cr.idCompanyRelationship)[0],
    }));

    return { data: { content: options } };
  };

  const searchFunctionCompanySupplier = async (query: string) => {
    const response = await searchCompanySupplier(query);
    const data = response.data.content;

    const clientCompanies = data.filter((item: CompanyResponse) =>
      item.companyRelationships.some(
        (cr) => cr.businessRelationship === "FORNECEDOR"
      )
    );

    const options: Record[] = clientCompanies.map((item: CompanyResponse) => ({
      label: item.name,
      value: item.companyRelationships
        .filter((cr) => cr.businessRelationship === "FORNECEDOR")
        .map((cr) => cr.idCompanyRelationship)[0],
    }));

    return { data: { content: options } };
  };

  const searchFunctionOffer = async (query: string) => {
    const response = await searchOffer(query);
    const data = response.data.content;

    const options: Record[] = data.map((item: OfferingResponse) => ({
      label: item.description,
      value: item.id,
    }));

    return { data: { content: options } };
  };

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
        >
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
                  <TextAreaInput
                    id="description"
                    labelFor="description"
                    labelText="Descrição"
                    placeholder="Dê uma breve descrição do seu projeto..."
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="customer"
                render={({ input, meta }) => (
                  <DropdownInput
                    searchFunction={searchFunctionCompanyCustomer}
                    labelFor="customer"
                    disabled={mode == "edit" ? true : false}
                    labelText="Cliente"
                    inputValue={initialValues.customerRelationship}
                    placeholder="Selecione o cliente"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="supplier"
                render={({ input, meta }) => (
                  <DropdownInput
                    searchFunction={searchFunctionCompanySupplier}
                    labelFor="supplier"
                    disabled={mode == "edit" ? true : false}
                    labelText="Fornecedor"
                    inputValue={initialValues.supplierRelationship}
                    placeholder="Selecione o fornecedor"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Field
                name="offering"
                render={({ input, meta }) => (
                  <DropdownInput
                    searchFunction={searchFunctionOffer}
                    labelFor="offering"
                    disabled={mode == "edit" ? true : false}
                    labelText="Serviço ou Produto"
                    inputValue={initialValues.customerRelationship}
                    placeholder="Selecione o Serviço ou Produto"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    {...input}
                  />
                )}
              />

              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Adicionar"}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  );
}
