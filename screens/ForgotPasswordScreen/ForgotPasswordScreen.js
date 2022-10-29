import React, { useState } from 'react' //eslint-disable-line
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

export default function ForgotPasswordScreen () {
//   const [username, setUsername] = useState('')
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm()

  const send = () => {
    navigation.navigate('NewPasswordScreen')
  }

  const goToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Cambiar contraseña</Text>

        <CustomInput name='username' control={control} placeholder='Username' rules={{ required: 'Se requiere username', minLength: { value: 5, message: 'Usernarme debe tener al menos 5 caracteres' }, maxLength: { value: 20, message: 'Username solo puede tener 20 caracteres como máximo' } }} />

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
