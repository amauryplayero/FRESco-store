import { combineReducers } from 'redux'


const initialState = {
    cart: [],
    input: "",
    signedInUser: { 
        userName: "",
        authorized: false
    }
}


//ACTION TYPES
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const CLEAR_CART = 'CLEAR_CART'
const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
const SIGN_IN_USER = 'SIGN_IN_USER'

//ACTION FUNCTIONS

export const addItem = (items) =>{

    return{
        type: ADD_PRODUCT_TO_CART,
        payload: items
    }
}

export const clearCart = () =>{

    return{
        type: CLEAR_CART
    }
}

export const setSearchInput = (input) =>{
    return{
        type: SET_SEARCH_INPUT,
        payload: input
    }
}

export const signInUser = (userName, boolean) =>{
    return {
        type: SIGN_IN_USER,
        payload: {username:userName,
                authorized: boolean}

    }


}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            const items = action.payload    
           
            if(state.cart===undefined) {
                return {cart: [items]}
            } else {
            
            return {cart: [...state.cart,items]}
            }
        case CLEAR_CART:
            return {cart: []}
        
        case SET_SEARCH_INPUT: 
            const newInput = action.payload
            if(newInput===""){
            return {...state}
            }else{
            return {...state,input:newInput}
            }

        case SIGN_IN_USER:
            const userName = action.payload.username
            const authorized = action.payload.authorized

            return { signedInUser: {
                                username: userName,
                                authorized: authorized
                             }
            }
        default:
            return{...state}
    }
    
   
}

// console.log(initialState)


export default reducer

