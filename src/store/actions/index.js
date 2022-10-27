import utils, { storeData } from '../../utilities'

const urlApi = utils.URLAPI // eslint-disable-line 

export const login = (data) => {
  storeData('TOKEN', data)
  return {
    type: 'USER_LOGIN',
    payload: data
  }
}

export const logout = () => {
  storeData('TOKEN', null, true)
  return {
    type: 'USER_LOGOUT',
    payload: false
  }
}
