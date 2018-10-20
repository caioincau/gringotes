const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COINS':
      return [...state, ...action.coins]
    default:
      return state
  }
}

export default reducer
