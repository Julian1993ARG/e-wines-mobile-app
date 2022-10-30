import React, { useState } from 'react' //eslint-disable-line
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
import utils from '../../src/utils/utilities'
import axios from 'axios'

export default function ForgotPasswordScreen () {
//   const [username, setUsername] = useState('')
  const navigation = useNavigation()
  // const dispatch = useDispatch()
  const { control, handleSubmit } = useForm()

  const send = async (email) => {
    console.log(email)
    try {
      const res = await axios.post(`${utils.URLAPI}/users/forgotPaswwoed`, email)
      console.log(res)
      Alert.alert('Le enviamos un email con una contraseña provisoria')
      navigation.navigate('NewPasswordScreen')
    } catch (error) {
      console.warn(error.message)
    }
  }

  const goToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Cambiar contraseña</Text>

        <CustomInput name='email' control={control} placeholder='Email' rules={{ required: 'Se requiere email', minLength: { value: 5, message: 'Email debe tener al menos 5 caracteres' }, maxLength: { value: 20, message: 'Email solo puede tener 20 caracteres como máximo' } }} />

        <CustomButton onPress={handleSubmit(send)} text='Enviar' />

        <CustomButton onPress={goToSignIn} text='Volver a Sign In' type='TERTIARY' />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10
  },
  text: {
    color: 'grey',
    marginVertical: 10
  }
})
