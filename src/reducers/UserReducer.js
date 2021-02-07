const initialState = {
  isLoggedIn: false,
  loading: true,
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        isLoggedIn: true,
        loading: false,
        data: action.payload,
      }
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        loading: false,
        data: {},
      }
    default:
      return state
  }
}
