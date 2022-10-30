import React from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import utils from '../../src/utils/utilities'
import { useSelector } from 'react-redux'

export default function NewPasswordScreen () {
  // const [code,setCode]=useState('')
  // const [password,setPassword]=useState('')
  // const [repeatPassword,setRepeatPassword]=useState('')
  const user = useSelector(state => state.user)
  const navigation = useNavigation()
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: 'ewines'
    }
  })
  const pwd = watch('password')

  const send = async (newPasswordData) => {
    if (user) {
      try {
        const res = await axios.post(`${utils.URLAPI}/users/${user.id}`, newPasswordData)
        console.log(res)
        if (res.data) {
          navigation.navigate('SignIn')
        } else {
          Alert('Error', 'No se pudo cambiar la contraseña')
        }
      } catch (error) {
        console.log(error.message)
      }
    } else {
      Alert('Error', 'No hay usuario')
    }
  }

  const goToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Nueva contraseña</Text>

        <CustomInput name='password' control={control} placeholder='Ingrese la contraseña provisoria que le enviamos por email' />
        <CustomInput
          name='password2' control={control} placeholder='New password' secureTextEntry rules={{ required: 'Se requiere password', minLength: { value: 8, message: 'Password debe tener al menos 8 caracteres' }, maxLength: { value: 20, message: 'Password solo puede tener 20 caracteres como máximo' } }}
        />
        <CustomInput name='passwordRepeat' control={control} placeholder='Repeat new password' secureTextEntry rules={{ validate: value => value === pwd || 'Las contraseñas no coinciden' }} />

        <CustomButton onPress={handleSubmit(send)} text='Registrar nueva contraseña' />

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
