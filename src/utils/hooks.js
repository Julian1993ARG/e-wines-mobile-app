import { useState } from 'react'
import { storeData } from './utilities'
import { useDispatch } from 'react-redux'//eslint-disable-line
import { login } from '../store/actions'

// Custon hook permite ver si esta logeado
export const useLogin = () => {
  const dispatch = useDispatch()//eslint-disable-line
  const [loginState, setLoginState] = useState(false)
  const [userHook, setUserHook] = useState(null)
  const checkLogin = async () => {
    const data = await storeData('TOKEN')
    if (data) {
      setLoginState(true)
      setUserHook(data)
      dispatch(login(data))//eslint-disable-line
    } else if (data === null) {
      setLoginState(false)
      setUserHook(null)
    }
  }

  return { loginState, userHook, checkLogin }
}
