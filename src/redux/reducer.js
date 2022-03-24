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
const ADD_ONE_TO_QUANTITY = 'ADD_ONE_TO_QUANTITY'

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

export const addOneToQuantity = (product_id) => {
    return {
        type: ADD_ONE_TO_QUANTITY,


    }
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            const items = action.payload  
            console.log(state)
            return {cart: [...state.cart,items]}
            
            
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
            };
        
            case ADD_ONE_TO_QUANTITY:
                return
        default:
            return{...state}
    }
    
   
}

// console.log(initialState)


export default reducer

