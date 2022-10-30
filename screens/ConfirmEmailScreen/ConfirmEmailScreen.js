import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../src/components/CustomButton/CustomButton'
import CustomInput from '../../src/components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

export default function ConfirmEmailScreen ({ route }) {
  const { control, handleSubmit } = useForm()

  const navigation = useNavigation()

  const confirm = () => {
    console.log(route)
    if (route.params.username) {
      navigation.navigate('SignIn')
    }
  }
  const resend = () => {
    console.warn('resend')
  }
  const goToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirmar E-mail</Text>

        <CustomInput name='code' control={control} placeholder='Ingrese código' rules={{ required: 'Se requiere código', minLength: { value: 6, message: 'El código debe tener al menos 6 caracteres' } }} />

        <CustomButton onPress={handleSubmit(confirm)} text='Confirmar' />

        <CustomButton onPress={resend} text='Reenviar código' type='SECONDARY' />
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
