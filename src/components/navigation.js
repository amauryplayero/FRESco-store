import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import ProductCards from './productCard'
import axios from "axios";
import '../App.css'
import { clearCart } from "../redux/reducer";

function Navigation (props) {
    const numberOfItems = props.items.cart.length
    // console.log(props)

let pathName = `${useLocation().pathname}`

if (pathName==="/"){
    pathName='home'
} else {
    pathName = pathName.substring(1)
}
console.log(pathName)



    return (
        <>
        
         <nav>
            <div className="navigationBarContainer">
                <Link to="/" className={`links${pathName}`} id='FRESco'>FRESco.</Link>
                    <div id="restOfNavLinks">
                        <Link to="/contact" className={`links${pathName}`}>about</Link>

                        <Link to="/cart" className={`links${pathName}`}
                        >cart{`(${numberOfItems})`}
                        </Link>
                        
                        <input placeholder="search..." id={`searchBar${pathName}`}></input>
                        <div id="loginAndRegisterContainer">
                            <Link to="/logIn" className={`links${pathName}`} id="login">log in</Link>
                            <Link to="/register" className={`links${pathName}`} id="register">register</Link>
                        </div>
                    </div>
            </div>
        </nav>
        </>
    )
}
const mapStateToProps = (state) =>{
   return {
    items: state
   } 
}

export default connect(mapStateToProps)(Navigation)