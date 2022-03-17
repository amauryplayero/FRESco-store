import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from "./routes/contact"
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './index.css';
// import initialState from './redux/reducer'
import {store} from './redux/index.js'
import reportWebVitals from './reportWebVitals';
import Cart from "./routes/cart"
const rootElement = document.getElementById("root");




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
     <Provider store={store}> 
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </Provider>
      </BrowserRouter>
  </React.StrictMode>,
    rootElement

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
