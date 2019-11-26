const initialState = {
    email: '',
    name: '',
    user_id: '',
    profile_img: '',
    cartCount: 0
  }
  
  // ACTION CONSTANTS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'

// ACTION BUILDERS
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  }
}

export function handleCount(count) {
  return {
    type: UPDATE_CART_COUNT,
    payload: count
  }
}
  
  export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER_INFO:
            return {...state, ...action.payload}
        case 'ADD_TO_CART':
          return {...state, cartCount: action.payload.cartCount}
      case 'REMOVE_FROM_CART': 
        return state.filter(cartItem=>cartItem.id !== action.payload.id)
      default: return state
    }
  }