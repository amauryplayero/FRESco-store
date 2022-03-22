import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import MapCart from '../components/mapCart'
import axios from 'axios'
import Navigation from '../components/navigation'
import "../App.css"
// import { addItem } from '../redux/reducer';
import { connect } from 'react-redux'
import  {clearCart} from '../redux/reducer';



const myUrl = "http://localhost:3001"


function Cart(props) {   


    const pathName = `${useLocation().pathname.substring(1)}`

    const redirectToCheckout =()=>{

    axios.post(myUrl+`/create-checkout-session`)
    .then(res=>{
       
        console.log(res.data.url)
        window.location.assign(res.data.url)
        
        })
    }

    
    useEffect(()=>{

    },[])
  
    return(
        <>
        <Navigation />
        <br/>
        <br/>
        <br/>
        <h1>cart</h1>
        <MapCart />
        <button onClick={()=>props.clearCart()}>clear cart</button>
        <button onClick={()=>redirectToCheckout()}>CHECK OUT</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state,
        }
}

export default connect(mapStateToProps, {clearCart})(Cart)
