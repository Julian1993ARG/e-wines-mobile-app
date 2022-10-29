import React, { useState } from 'react'//eslint-disable-line
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import SocialSignInButtons from '../../src/components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&<*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default function SignUpScreen () {
  // const [username,setUsername]=useState('')
  // const [email,setEmail]= useState('')
  // const [password,setPassword]=useState('')
  // const [passwordRepeat,setPasswordRepeat]=useState('')
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: 'ewines'
    }
  })
  const pwd = watch('password')

  const navigation = useNavigation()

  const register = (data) => {
    console.log(data)
    navigation.navigate('ConfirmEmailScreen')
  }
  const onPrivacyPress = () => {
    console.warn('Crear cuenta')
  }
  const onUsePress = () => {
    console.warn('Crear cuenta')
  }
  const SignInPress = () => {
    navigation.navigate('SignIn')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Crear cuenta</Text>

        <CustomInput name='username' control={control} placeholder='Username' rules={{ required: 'Se requiere username', minLength: { value: 5, message: 'Usernarme debe tener al menos 5 caracteres' }, maxLength: { value: 20, message: 'Username solo puede tener 20 caracteres como máximo' } }} />
        <CustomInput name='email' control={control} placeholder='Email' rules={{ required: 'Se requiere email', pattern: { value: EMAIL_REGEX, message: 'Email inválido' } }} />
        <CustomInput
          name='password' control={control} placeholder='Password'
            //  value={password}
            //  setValue={setPassword}
          rules={{ required: 'Se requiere password', minLength: { value: 8, message: 'Password debe tener al menos 8 caracteres' }, maxLength: { value: 20, message: 'Password solo puede tener 20 caracteres como máximo' } }}
          secureTextEntry
        />
        <CustomInput name='repeatPassword' control={control} placeholder='Repeat password' rules={{ validate: value => value === pwd || 'Las contraseñas no coinciden' }} secureTextEntry />

        <CustomButton onPress={handleSubmit(register)} text='Registrarse' />

        <Text style={styles.text}>Al registarse, usted está confirmando que acepta nuestras <Text style={styles.link} onPress={onUsePress}>Políticas de Uso</Text> y <Text style={styles.link} onPress={onPrivacyPress}>Privacidad.</Text></Text>

        <SocialSignInButtons style={{ width: '100%' }} />

        <CustomButton onPress={SignInPress} text='Tienes una cuenta? Ingresa' type='TERTIARY' />
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
  },
  link: {
    color: 'blue'
  }
})
