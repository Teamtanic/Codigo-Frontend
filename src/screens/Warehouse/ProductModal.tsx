import { Button } from '../../components/Button'
import { CardModal, ModelModalProp } from '../../components/CardModal'
import { TextInput } from '../../components/TextInput'
import { Form, Field } from 'react-final-form'
import { number, object, string } from 'yup'
import {
  ProductWarehouseCreateRequest,
  ProductWarehouseResponse,
  ProductWarehouseUpdateRequest
} from '../../services/ProductWarehouse/type'
import {
  createProduct,
  editProduct,
  getProductById
} from '../../services/ProductWarehouse/apiService'
import { ProductWarehouseProps } from './TableListProductWarehouse'
import { useNavigate } from 'react-router-dom'
import { createUpdateObject } from '../../utils'
import { HttpStatusCode } from 'axios'
import { useEffect, useState } from 'react'

export function ProductModal({
  action,
  optionsTrigger,
  title,
  mode = 'create',
  data,
  triggerStyle,
  iconTrigger
}: ModelModalProp & { data?: ProductWarehouseProps }) {
  let navigate = useNavigate()

  const validationSchema = object({
    product: string().required('Nome é obrigatório'),
    quantity: number().required('Quantidade é obrigatório'),
    companyRelationship: string(),
    supplierPrice: number()
  })

  const onSubmit = async (values: ProductWarehouseCreateRequest) => {
    try {
      const productData: ProductWarehouseCreateRequest = {
        product: values.product,
        quantity: parseInt(values.quantity, 10),
        companyRelationship: values.companyRelationship,
        supplierPrice: values.supplierPrice
      }

      if (mode === 'create') {
        await createProduct(productData)
      } else if (mode === 'edit') {
        if (data) {
          const updateData: ProductWarehouseUpdateRequest = createUpdateObject(
            data,
            productData
          )
          let editResponse = await editProduct(updateData, data.id)
          if (editResponse.status === HttpStatusCode.Ok) {
            let updateResponse = await getProductById(data.id)
            if (updateResponse.status === HttpStatusCode.Ok) {
              const record: ProductWarehouseResponse = updateResponse.data
              navigate(`/produto/${data.id}`, { state: { record } })
            }
          }
        }
      }
      console.log(values)
    } catch (error) {
      console.error(error)
    }
  }

  const [initialValues, setInitialValues] = useState<any>({})

  useEffect(() => {
    if (data) {
      setInitialValues({
        id: data.id,
        product: data.product,
        quantity: data.quantity
      })
    } else {
      setInitialValues({})
    }
  }, [])

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={values => {
        try {
          validationSchema.validateSync(values, { abortEarly: false })
        } catch (err: any) {
          return err.inner.reduce((errors: any, error: any) => {
            return { ...errors, [error.path]: error.message }
          }, {})
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
                name="product"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="product"
                    labelText="Produto"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="product"
                      type="text"
                      placeholder="Digite o produto..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              <Field
                name="quantity"
                render={({ input, meta }) => (
                  <TextInput.Root
                    labelFor="quantity"
                    labelText="Quantidade"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="quantity"
                      type="number"
                      min="0"
                      placeholder="Digite a quantidade..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />

              {/*
              <Field
              name="companyRelationship"
              render={({ input, meta }) => (
                <TextInput.Root
                    labelFor="companyRelationship"
                    labelText="Fornecedor"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                      id="companyRelationship"
                      type="text"
                      placeholder="Informe o fornecedor..."
                      {...input}
                    />
                  </TextInput.Root>
                )}
              />
              
              <Field
              name="supplierPrice"
              render={({ input, meta }) => (
                  <TextInput.Root
                  labelFor="supplierPrice"
                    labelText="Preço"
                    error={meta.touched && meta.error ? meta.error : undefined}
                  >
                    <TextInput.Input
                    id="supplierPrice"
                    type="text"
                    placeholder="Informe o preço..."
                    {...input}
                    />
                    </TextInput.Root>
                    )}
                    />
                    
              */}
              <Button
                className={`rounded-md z-50 !w-fit h-12 translate-y-10 ml-auto mr-0`}
                textSize="sm"
                textStyle="text-gray-100"
                disabled={submitting}
              >
                {submitting ? 'Enviando...' : action}
              </Button>
            </div>
          </form>
        </CardModal>
      )}
    />
  )
}
