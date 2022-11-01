import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { postPublication, getAllProduct } from '../../store/actions'
import DropDown from '../DropDown'
import InputStyle from '../InputStyle'
import SelectImage from '../selectImage'
import { uploadImage } from '../../utils/utilities'
import TextStyle from '../TextStyle'
import { schemaFormPubli } from '../../utils/schemas'
import CustonButton from '../CustomButton/CustomButton'

export default function CreatePubli (props) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)

  const [image, setImage] = React.useState({
    uri: '',
    base64: '' // base64 es el formato que acepta la db
  })
  const [charge, setCharge] = React.useState(0) // para mostrar el spinner
  if (!products) dispatch(getAllProduct()) // si no hay productos los traigo

  const { values, setValues, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      productId: '',
      title: '',
      price: 0,
      description: '',
      count: 0,
      image: '',
      userId: user ? user.user.id : ''
    },
    validationSchema: schemaFormPubli,
    onSubmit: async values => {
      setSend(true)
      const url = await uploadImage(image.uri, image.base64, setCharge)
      dispatch(postPublication({ ...values, image: url })) // envio la publicacion con la url de la imagen
      setSend(false)
    }
  })
  console.log(errors)
  const [send, setSend] = useState(false)
  return (

    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <TextStyle align='center' fontSize='title'>Crear Publicacion</TextStyle>
        <InputStyle
          placeholder='Titulo'
          value={values.title}
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          error={errors.title && touched.title}
          sucess={touched.title && !errors.title}
        />
        {errors.title && touched.title && <TextStyle color='error' fontSize='medium'>{errors.title}</TextStyle>}
        <InputStyle
          placeholder='Precio'
          value={values.price}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          keyboardType='numeric'
          error={errors.price && touched.price}
          success={touched.price && !errors.price}
        />
        {errors.price && touched.price && <TextStyle color='error' fontSize='medium'>{errors.price}</TextStyle>}
        <InputStyle
          placeholder='Descripcion'
          value={values.description}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          error={errors.description && touched.description}
          sucess={touched.description && !errors.description}
        />
        {errors.description && touched.description && <TextStyle color='error' fontSize='medium'>{errors.description}</TextStyle>}
        <InputStyle
          placeholder='Cantidad'
          value={values.count}
          onChangeText={handleChange('count')}
          onBlur={handleBlur('count')}
          keyboardType='numeric'
          error={errors.count && touched.count}
          sucess={!errors.count && touched.count}
        />
        <SelectImage setImage={setImage} />
        {typeof (products) === 'string' ? <TextStyle>{products}</TextStyle> : <DropDown values={values} onChange={setValues} items={products} title='Seleccione un producto' value='productId' />}
        {errors.productId && touched.productId && <TextStyle color='error' fontSize='medium'>{errors.productId}</TextStyle>}
        <CustonButton text='Crear' disabled={send} onPress={handleSubmit} />
        <View>
          {(charge > 0 && charge < 100) && <Text>Cargando...</Text>}
        </View>

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  scroll: {
    width: '100%',
    padding: 20
  }
})
