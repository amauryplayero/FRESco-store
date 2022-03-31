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




const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(() => {


  saveState({
    cart: store.getState().cart,

   });


});



export {store}


