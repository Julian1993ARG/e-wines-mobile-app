import React, { useState } from 'react' //eslint-disable-line
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import Logo from '../../assets/Ewines/e-wine.png'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import SocialSignUpButton from '../../src/components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import utils from '../../src/utils/utilities'
import { login, logout } from '../../src/store/actions'//eslint-disable-line
import axios from 'axios'

export default function SignInScreen () {
  const dispatch = useDispatch()//eslint-disable-line
  const user = useSelector(state => state.user)//eslint-disable-line

  const [loading, setLoading] = useState(false)//eslint-disable-line
  const [success, setSuccess] = useState(false)//eslint-disable-line

  const { height } = useWindowDimensions()
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm()

  const onSignInPressed = async (dataLogin) => {
    console.log(JSON.stringify(dataLogin))

    try {
      const res = await axios.post(`${utils.URLAPI}/users/login`, dataLogin)
      console.log(res)
      if (res.data.token) {
        dispatch(login(res.data))
      } else {
        Alert('Error', 'Email or password incorrect')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const onForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen')
  }

  const onSignUpPress = () => {
    navigation.navigate('SignUpScreen')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />

        <CustomInput name='email' placeholder='Email' control={control} rules={{ required: 'Se requiere email', minLength: { value: 5, message: 'Email debe tener al menos 5 caracteres' }, maxLength: { value: 20, message: 'Email solo puede tener 20 caracteres como máximo' } }} />
        <CustomInput name='password' placeholder='Password' control={control} rules={{ required: 'Se requiere password', minLength: { value: 8, message: 'Password debe tener al menos 8 caracteres' }, maxLength: { value: 20, message: 'Password solo puede tener 20 caracteres como máximo' } }} secureTextEntry />

        <CustomButton onPress={handleSubmit(onSignInPressed)} text='Sign In' />

        <CustomButton onPress={onForgotPassword} text='Olvidé mi contraseña' type='TERTIARY' />

        <SocialSignUpButton />

        <CustomButton onPress={onSignUpPress} text='No tienes cuenta? Crear cuenta' type='TERTIARY' />
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 15
  }
})
