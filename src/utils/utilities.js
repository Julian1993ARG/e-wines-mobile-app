import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const utils = {
  URLAPI: 'https://ewinesapp.herokuapp.com',
  CLOUDNAME: 'dfq27ytd2',
  PRESET: 'cpnushlf',
  CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dfq27ytd2/upload'
}

export default utils

export const storeData = async (name, value, destroy) => {
  if (!value && !destroy) {
    const jsonValue = await AsyncStorage.getItem(name)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } else if (name && value && !destroy) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(name, jsonValue)
      const data = await AsyncStorage.getItem(name)
      return data != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      console.log('error', e)
    }
  } else {
    try {
      await AsyncStorage.removeItem(name)
    } catch (e) {
      // remove error
    }
  }
}

export function parsThousands (value) { // 120000 => 120k
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}
// Para poder subir imagenes a cloudinary

export const uploadImage = async (uri, base64, setCharge) => {
  // uri es la direccion
  // debe estar en base64
  // values son todos los valores
  // setvalues es el seteador para modificar values
  // setCharge es un estado que retorna el progreso de carga de la imagen

  const uriArray = uri.split('.')
  const fileType = uriArray[uriArray.length - 1] // obtengo el tipo de archivo
  const file = `data:${fileType};base64,${base64}`
  try {
    const upload = await axios.post(utils.CLOUDINARY_URL, {
      file,
      upload_preset: utils.PRESET
    }
    , {
      onUploadProgress (e) {
        setCharge(Math.round((e.loaded * 100) / e.total))
      }
    })
    return upload.data.secure_url
    // const response = await upload.data // obtengo la respuesta de cloudinary
    // const url = response.secure_url // obtengo la url de la imagen
    // setValues({ ...values, image: url }) // guardo la url en el estado
  } catch (error) {
    console.log(error)
  }
}
