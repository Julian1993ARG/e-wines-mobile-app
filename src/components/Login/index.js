import React from 'react'
import { View, Button } from 'react-native'
import { useFormik } from 'formik'
import InputStyle from '../InputStyle'
import utils from '../../utilities'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const Login = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      fetch(`${utils.URLAPI}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            cookies.set('TOKEN', data, { path: '/' })
            console.log(cookies.get('TOKEN').user)
          }
        })
    }
  })
  return (
    <View style={{ justifyContent: 'center' }}>
      <InputStyle
        placeholder='E-mail'
        value={values.email}
        onChangeText={handleChange('email')}
      />
      <InputStyle
        placeholder='Password'
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      <Button title='Login' onPress={handleSubmit} />
    </View>
  )
}

export default Login
