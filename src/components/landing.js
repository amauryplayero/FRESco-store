import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductCards from './productCard'
import axios from "axios";
import '../App.css'
import { clearCart } from "../redux/reducer";
import Navigation from './navigation'
import Footer from "./footer";

const myUrl = "https://frescostore.herokuapp.com"
function Landing (props) {   
 
  
    useEffect(()=>{
       
    },[])

    const handleClick=()=>{
        console.log('handled click from link')
    }


    // const numberOfItems = props.cart.cart.length

    return(
        <>
        <div id="landing">
       <Navigation />
       
      {/* <div id="soapsTitle" class="productTitle">Soaps</div> */}
        <ProductCards />

        </div>
        <Footer />
        </>

    )
}


const mapStateToProps = (state) => {
    return {
        cart: state,
        }
}

export default connect(mapStateToProps)(Landing)