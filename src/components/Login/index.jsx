import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'
import { useFormik } from 'formik'
import InputStyle from '../InputStyle'
import utils from '../../utilities'
import TextStyle from '../TextStyle'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../store/actions'
import { schemaLogin } from '../../schemas'

const Login = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if (user) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [user])
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schemaLogin,
    onSubmit: async (values, { resetForm }) => {
      fetch(`${utils.URLAPI}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.token) {
            setSuccess(true)
            dispatch(login(data))
            setTimeout(() => {
              resetForm()
              setSuccess(false)
            }, 3000)
            resetForm()
          } else {
            Alert.alert('Error', 'Email or password incorrect')
          }
        })
    }
  })
  console.log(user, 'user')
  return (
    <View style={styles.container}>
      <InputStyle
        placeholder='E-mail'
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />

      <InputStyle
        placeholder='Password'
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
        onBlur={handleBlur('password')}
      />

      {success && <TextStyle style={styles.success} fontWeight='bold'>Login successful</TextStyle>}
      {!loading && <Button title='Login' onPress={handleSubmit} />}
      {loading && <Button color='red' title='Cerrar sesión' onPress={() => dispatch(logout())} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%'
  },
  success: {
    color: 'green'
  }
})

export default Login
