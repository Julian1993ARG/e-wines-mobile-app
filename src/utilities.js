import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'

const utils = {
  URLAPI: 'https://e-winespf.herokuapp.com'
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
    console.log('Done.')
  }
}

// Custon hook permite ver si esta logeado
export const useLogin = () => {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const checkLogin = async () => {
      const data = await storeData('TOKEN')
      if (data) {
        setLogin(true)
        setUser(data)
      }
    }
    checkLogin()
  }, [])
  return { login, user }
}
