const initialState = {
  user: false,
  publications: [],
  allPublications: [],
  products: [],
  varietals: []
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
    case 'GET_ALL_PUBLICATIONS':
      return {
        ...state,
        publications: action.payload,
        allPublications: action.payload
      }
    case 'POST_PUBLICATION':
      return { ...state }
    case 'GET_PRODUCT_ALL':
      return { ...state, products: action.payload }
    case 'FILTER_PUBLICATIONS':
      return { ...state, publications: action.payload }
    case 'CLEAR_FILTER':
      return { ...state, publications: state.allPublications }
    case 'GET_VARIETALS':
      return { ...state, varietals: action.payload }
    default:
      return { ...state }
  }
}
