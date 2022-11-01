import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { postPublication, getAllProduct, getAllPublications } from '../../store/actions'
import DropDown from '../DropDown'
import SelectImage from '../selectImage'
import { uploadImage } from '../../utils/utilities'
import { schemaFormPubli } from '../../utils/schemas'
import MaterialComunityIcons from 'react-native-vector-icons/Ionicons'
import {
  Button,
  Input,
  Text,
  Spinner
} from '@ui-kitten/components'

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small' />
  </View>
)

function SucessIcon (props) {
  return (
    <MaterialComunityIcons name='checkmark-done' size={25} color='green' />
  )
}
function AlertIcon (props) {
  return (
    <MaterialComunityIcons name='alert-circle' size={25} color='red' />
  )
}

export default function CreatePubli () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)

  const [image, setImage] = React.useState({
    uri: '',
    base64: '' // base64 es el formato que acepta la db
  })
  const [charge, setCharge] = React.useState(0) // eslint-disable-line
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
    onSubmit: async (values, { resetForm }) => {
      setSend(true)
      const url = await uploadImage(image.uri, image.base64, setCharge)
      dispatch(postPublication({ ...values, image: url }))
      dispatch(getAllPublications())
      setTimeout(() => {
        setSend(false)
        resetForm()
        setImage({ uri: '', base64: '' }) // reseteo la imagen
      }, 1000)
    }
  })
  const [send, setSend] = useState(false)
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder='Titulo'
          value={values.title}
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          status={touched.title ? errors.title ? 'danger' : 'success' : 'basic'}
          caption={touched.title && errors.title}
          accessoryRight={touched.title ? errors.title ? AlertIcon : SucessIcon : null}
          style={styles.input}
        />
        <Input
          placeholder='Precio'
          value={values.price}
          onChangeText={handleChange('price')}
          onBlur={handleBlur('price')}
          keyboardType='numeric'
          status={touched.price ? errors.price ? 'danger' : 'success' : 'basic'}
          caption={touched.price && errors.price}
          accessoryRight={touched.price ? errors.price ? AlertIcon : SucessIcon : null}
          style={styles.input}
        />
        <Input
          placeholder='Cantidad'
          value={values.count}
          onChangeText={handleChange('count')}
          onBlur={handleBlur('count')}
          keyboardType='numeric'
          status={touched.count ? errors.count ? 'danger' : 'success' : 'basic'}
          caption={touched.count && errors.count}
          accessoryRight={touched.count ? errors.count ? AlertIcon : SucessIcon : null}
          style={styles.input}
        />
        <View style={styles.selects}>
          <SelectImage setImage={setImage} />
          {typeof (products) === 'string' ? <Text>{products}</Text> : <DropDown values={values} onChange={setValues} items={products} title='Seleccione un producto' value='productId' />}
          {errors.productId && touched.productId && <Text status='danger' category='s1'>{errors.productId}</Text>}
        </View>
        <Input
          multiline
          textStyle={{ minHeight: 64 }}
          placeholder='Descripcion'
          value={values.description}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          status={touched.description ? errors.description ? 'danger' : 'success' : 'basic'}
          caption={touched.description && errors.description}
          accessoryRight={touched.description ? errors.description ? AlertIcon : SucessIcon : null}
          style={styles.input}
        />
        <Button
          style={styles.button}
          appearance='outline'
          status='primary'
          disabled={send}
          onPress={handleSubmit}
          accessoryLeft={send && LoadingIndicator}
        >
          {send ? 'Enviando...' : 'Enviar'}
        </Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    marginVertical: 20,
    height: '100%',
    paddingHorizontal: 15
  },
  selects: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 10
  },
  input: {
    width: '100%',
    marginVertical: 10 //eslint-disable-line
  },
  button: {
    width: '100%',
    marginVertical: 10 //eslint-disable-line
  }
})
