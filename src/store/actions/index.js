import utils from '../../utils/utilities'
import axios from 'axios'

const urlApi = utils.URLAPI // eslint-disable-line 

export const login = (data) => {
  return {
    type: 'USER_LOGIN',
    payload: data
  }
}

export const logout = () => {
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
export const filterPublications = ({ varietal, type, origin, opt }) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${urlApi}/publications/filter?varietal=${varietal}&type=${type}&origin=${origin}&opt=${opt}`)
      return dispatch({
        type: 'FILTER_PUBLICATIONS',
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const clearFilter = () => {
  return { type: 'CLEAR_FILTER', payload: null }
}

export const getVarietals = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`${urlApi}/varietals`)
      return dispatch({
        type: 'GET_VARIETALS',
        payload: data
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const addCarrito = (publication) => {
  return {
    type: 'ADD_CARRITO',
    payload: publication
  }
}

export const removeCarrito = (id) => {
  return {
    type: 'REMOVE_CARRITO',
    payload: id
  }
}

export const searchPublicationByName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`${urlApi}/publications?name=${name}`)
      console.log(data)
      return dispatch(
        { type: 'SEARCH_PUBLICATIONS', payload: data }
      )
    } catch (error) {
      console.log(error.message)
    }
  }
}
