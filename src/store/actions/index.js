import utils, { storeData } from '../../utils/utilities'
import axios from 'axios'

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

export const getAllPublications = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${urlApi}/publications`)

      return dispatch({
        type: 'GET_ALL_PUBLICATIONS',
        payload: res.data
      })
    } catch (error) {
      console.log('error')
      return error.message
    }
  }
}

export const getAllProduct = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${urlApi}/products`)

      return dispatch({
        type: 'GET_PRODUCT_ALL',
        payload: res.data
      })
    } catch (error) {
      console.log('error')
      return error.message
    }
  }
}

export function postPublication (data, token) {
  return async function (dispatch) {
    try {
      const api = await axios.post(`${urlApi}/publications`, data)
      return dispatch({
        type: 'POST_PUBLICATION',
        Headers: { 'content-type': 'application/json' },
        payload: api.data
      })
    } catch (error) {
      console.log(error.response)
      throw new Error(error.response.data)
    }
  }
}
