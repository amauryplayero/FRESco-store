import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import ProductCards from './productCard'
import axios from "axios";
import '../App.css'
import { clearCart } from "../redux/reducer";
import Navigation from './navigation'

const myUrl = "http://localhost:3001"
function Landing (props) {

    const [cart, setCart] = useState('hi')

    const [registeredUser, setRegisteredUser] = useState(false)    
 
    console.log(props)
    useEffect(()=>{
       
    },[])

    const handleClick=()=>{
        console.log('handled click from link')
    }

    console.log(props.cart.cart.length)
    const numberOfItems = props.cart.cart.length

    return(
        <>
        <div id="landing">
       <Navigation />
       
      {/* <div id="soapsTitle" class="productTitle">Soaps</div> */}
        <ProductCards registeredUser={registeredUser}/>
        </div>
        </>

    )
}


const mapStateToProps = (state) => {
    return {
        cart: state,
        }
}

export default connect(mapStateToProps)(Landing)