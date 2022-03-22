import { createStore } from 'redux'
// import { loadState, saveState } from './browser-storage'
import reducer from './reducer'



// console.log('a')
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

const saveState = (state) => {
  // console.log(state)
try {
  const serializedCart = JSON.stringify(state);
  const serializedUserName = JSON.stringify(state.signedInUser)
  localStorage.setItem('state', serializedCart);
  // localStorage.setItem('userCredentials', serializedUserName)
} catch {
  // ignore write errors
}
};

// const saveStateUserName = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('userCredentials', serializedState);
//     localStorage.setItem('state', serializedState);
//   } catch {
//     // ignore write errors
//   }
//   };



const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(() => {
  // saveState({
  //  cart: store.getState().cart
  // });

  saveState({
    cart: store.getState().cart,
    // signedInUser: {
    //   userName: store.getState().signedInUser,
    //   authorized: store.getState().signedInUser
    // }
    
   });

  // saveStateUserName({
  //   signedInUser: {
  //   username: store.getState().signedInUser.username,
  //   authorized: store.getState().signedInUser.authorized
  //   }
  // })
});



export {store}


