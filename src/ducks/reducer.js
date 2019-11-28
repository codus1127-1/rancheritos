const initialState = {
    email: '',
    name: '',
    user_id: '',
    profile_img: '',
    cartCount: 0
  }
  
  // ACTION CONSTANTS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// ACTION BUILDERS
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  }
}

export function addCount(count) {
  return {
    type: ADD_TO_CART,
    payload: count
  }
}

export function removeCount(count) {
  return {
    type: REMOVE_FROM_CART,
    payload: count
  }
}
  
  export default function reducer(state = initialState, action) {
    console.log(state)
    console.log(action)
    switch(action.type) {
        case UPDATE_USER_INFO:
            return {...state, ...action.payload}
        case ADD_TO_CART:
          return {...state, ...action.payload}
      case REMOVE_FROM_CART: 
         return {...state, ...action.payload}
      default: return state
    }
  }