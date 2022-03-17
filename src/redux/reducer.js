import { combineReducers } from 'redux'


const initialState = {
    cart: [],
    // activeItemsInCart: []
}


//ACTION TYPES
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const CLEAR_CART = 'CLEAR_CART'

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



// export const clearCart = () => {
//     return{
//         type: CLEAR_CART
//     }
// }

// export const showActiveCart = (activeItemsToMap) =>{

//     return{
//         type: SHOW_ITEMS_TO_MAP_CART,
//         payload: activeItemsToMap
//     }

// }




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

        default:
            return{...state}
    }
    
   
}

// console.log(initialState)


export default reducer

