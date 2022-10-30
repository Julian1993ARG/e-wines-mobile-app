import React from 'react'
import { View, Text } from 'react-native'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { postPublication, getAllProduct } from '../../store/actions'
import DropDown from '../DropDown'
import InputStyle from '../InputStyle'
import SelectImage from '../selectImage'
import utils from '../../utils/utilities'
import axios from 'axios'

export default function CreatePubli () {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const products = useSelector(state => state.products)

  if (!products.length) dispatch(getAllProduct()) // si no hay productos, los traigo de la db

  const [image, setImage] = React.useState({
    uri: '',
    base64: '' // base64 es el formato que acepta la db
  })

  const uploadImage = async (uri, base64) => {
    const uriArray = uri.split('.')
    const fileType = uriArray[uriArray.length - 1] // obtengo el tipo de archivo
    const file = `data:${fileType};base64,${base64}`
    try {
      const upload = await axios.post(utils.CLOUDINARY_URL, {
        file,
        upload_preset: utils.PRESET
      })
      const response = await upload.data // obtengo la respuesta de cloudinary
      const url = response.secure_url // obtengo la url de la imagen
      console.log(url) // la url de la imagen la guardo en la db
      setValues({ ...values, image: url }) // guardo la url en el estado
    } catch (error) {
      console.log(error)
    }
  }
  const { values, setValues, handleChange, handleBlur } = useFormik({
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
  console.log(values)
  // const [selectProduct, setSelectProduct] = useState()
  return (
    <View>
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
    </View>
  )
}
