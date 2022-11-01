import * as Yup from 'yup'

const startWichLetter = /^[^0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][a-zA-Z0-9$-?¿¡!%.,\s]*$/gi // eslint-disable-line

export const schemaLogin = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

export const schemaFormPubli = Yup.object().shape({
  title: Yup.string().required('Es Requerido').matches(startWichLetter, 'Debe comenzar con una letra').min(3, 'Min 3 caracteres'),
  price: Yup.number('Solo números').required('Es Requerido').min(500, 'Min $500').positive('Positive number').max(500000, 'Max $500.000'),
  description: Yup.string().required('Es Requerido').min(10, 'Min 10 caracteres').max(150, 'Max 150 caracteres'),
  count: Yup.number().integer('No números decimales').required('Es Requerido').min(1, 'Min 1').positive('Min 1').max(10000, 'Max 10.000'),
  productId: Yup.string().required('Por favor seleccione un producto').uuid()
})
