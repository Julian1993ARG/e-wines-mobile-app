import React, { useState } from 'react'
import { View, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from '../CustomButton/CustomButton'

export default function SelectImage ({ setImage }) {
  const [showImage, setShowImage] = useState(false) // para mostrar la imagen seleccionada
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // solo imagenes
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true // para que me devuelva la imagen en base64
    })
    if (!result.cancelled) {
      const { uri, base64 } = result // me guardo la uri y la base64 de la imagen
      setImage({ uri, base64 }) // guardo la imagen en el estado
      setShowImage(uri)
    }
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton text='Seleccionar Imagen' onPress={pickImage} />
      {showImage && <Image source={{ uri: showImage }} style={{ width: 200, height: 200, marginVertical: 20 }} />}
    </View>
  )
}
