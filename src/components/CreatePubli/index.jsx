import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { postPublication, getAllProduct } from '../../store/actions'
import DropDown from '../DropDown'

export default function CreatePubli () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)

  if (!products.length) dispatch(getAllProduct()) // si no hay productos, los traigo de la db

  const { values, setValues } = useFormik({
    initialValues: {
      productId: '',
      title: '',
      price: 0,
      description: '',
      count: 0,
      image: {},
      userId: user ? user.user.id : ''
    },
    onSubmit: values => {
      dispatch(postPublication(values))
    }
  })
  // const [selectProduct, setSelectProduct] = useState()
  return (
    <View>
      {console.log(products)}
      <Text>Crear Publicacion</Text>

      {products && <DropDown values={values} onChange={setValues} items={products} title='Seleccione un producto' value='productId' />}
    </View>
  )
}
