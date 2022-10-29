const initialState = {
  user: false,
  publications: []
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
        publications: action.payload
      }
    default:
      return { ...state }
  }
}
