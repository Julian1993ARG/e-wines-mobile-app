import React, { useState } from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { postPublication, getAllProduct } from '../../store/actions'
import DropDown from '../DropDown'
import InputStyle from '../InputStyle'
import SelectImage from '../selectImage'
import { uploadImage } from '../../utils/utilities'

export default function CreatePubli () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)

  if (!products.length) dispatch(getAllProduct()) // si no hay productos, los traigo de la db

  const [image, setImage] = React.useState({
    uri: '',
    base64: '' // base64 es el formato que acepta la db
  })
  const [charge, setCharge] = React.useState(0) // para mostrar el spinner

  const { values, setValues, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      productId: '',
      title: '',
      price: 0,
      description: '',
      count: 0,
      image: {},
      userId: user ? user.user.id : ''
    },
    onSubmit: async values => {
      setSend(true)
      const url = await uploadImage(image.uri, image.base64, setCharge)
      setValues({ ...values, image: url }) // seteo la url de la imagen en el state de la publicacion
      // console.log(values) // values es el objeto que voy a guardar en la db
      console.log(values, 'Values')
      dispatch(postPublication(values)) // guardo la publicacion en la db
      setSend(false)
    }
  })
  const [send, setSend] = useState(false)
  return (
    <ScrollView>
      <Text>Crear Publicacion</Text>
      <InputStyle
        placeholder='Titulo'
        value={values.title}
        onChangeText={handleChange('title')}
        onBlur={handleBlur('title')}
      />
      <InputStyle
        placeholder='Precio'
        value={values.price}
        onChangeText={handleChange('price')}
        onBlur={handleBlur('price')}
        keyboardType='numeric' // solo numeros
      />
      <InputStyle
        placeholder='Descripcion'
        value={values.description}
        onChangeText={handleChange('description')}
        onBlur={handleBlur('description')}
      />
      <InputStyle
        placeholder='Cantidad'
        value={values.count}
        onChangeText={handleChange('count')}
        onBlur={handleBlur('count')}
        keyboardType='numeric' // solo numeros
      />
      <SelectImage setImage={setImage} />
      {products && <DropDown values={values} onChange={setValues} items={products} title='Seleccione un producto' value='productId' />}
      <Button title='Crear' disabled={send} onPress={handleSubmit} />
      <View>
        {(charge > 0 && charge < 100) && <Text>Cargando...</Text>}
      </View>
    </ScrollView>
  )
}
