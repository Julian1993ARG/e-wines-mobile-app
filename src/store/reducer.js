const initialState = {
  user: false,
  publications: [],
  products: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_PUBLI_ALL':
      return {
        ...state,
        publications: action.payload
      }
    case 'POST_PUBLICATION':
      return { ...state }
    case 'GET_PRODUCT_ALL':
      return { ...state, products: action.payload }
    default:
      return { ...state }
  }
}
