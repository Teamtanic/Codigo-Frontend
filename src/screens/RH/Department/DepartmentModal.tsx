import { Button } from "../../../components/Button";
import { CardModal, ModelModalProp } from "../../../components/CardModal";
import { TextInput } from "../../../components/TextInput";
import { Form, Field } from "react-final-form";
import { object, string } from "yup";
import {
  DepartmentCreateRequest,
  DepartmentResponse,
  DepartmentUpdateRequest,
} from "../../../services/Department/types";
import {
  createDepartment,
  editDepartment,
  getDepartmentById,
} from "../../../services/Department/apiService";
import { useNavigate } from "react-router";
import { createUpdateObject } from "../../../utils";
import { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";

export function DepartmentModal({
  action,
  optionsTrigger,
  title,
  mode = "create",
  data,
  triggerStyle,
  iconTrigger,
}: ModelModalProp & { data?: DepartmentResponse }) {
  let navigate = useNavigate();

  const validationSchema = object({
    name: string().required("Nome é obrigatório"),
  });

  const onSubmit = async (values: any) => {
    try {
      const departmentData: DepartmentCreateRequest = {
        name: values.name,
      };

      if (mode === "create") {
        const res = await createDepartment(departmentData);
        navigate(`/departamento/${res.data.id}`, {
          state: { record: res.data },
        });
      } else if (mode === "edit") {
        if (data) {
          const updateData: DepartmentUpdateRequest = createUpdateObject(
            data,
            departmentData
          );
          let editResponse = await editDepartment(updateData, data.id);
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getDepartmentById(data.id);
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: DepartmentResponse = updateResponse.data;
              navigate(`/departamento/${data.id}`, { state: { record } });
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
        name: data.name,
      });
    } else {
      setInitialValues({});
    }
  }, []);

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
                name="name"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="name"
                    labelText="Departamento"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="name"
                      type="text"
                      placeholder="Digite o Departamento..."
                      {...input}
                    />
                  </TextInput.Root>
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
