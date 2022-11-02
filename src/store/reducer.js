const initialState = {
  user: false,
  publications: [],
  allPublications: [],
  products: [],
  varietals: [],
  carrito: []
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
    case 'ADD_CARRITO':
      return {
        ...state,
        // carrito: [...state.carrito.find(item => item.id === action.payload.id) ? state.carrito.map(item => item.id === action.payload.id && { ...item, cant: item.cant + 1 }) : [...state.carrito, action.payload]] // eslint-disable-line
        carrito: [...state.carrito, action.payload]
      }
    case 'REMOVE_CARRITO':
      return { ...state, carrito: state.carrito.filter(item => item.id !== action.payload) }
    default:
      return { ...state }
  }
}
