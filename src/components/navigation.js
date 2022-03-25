import { Link, useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import ProductCards from './productCard'
import axios from "axios";
import '../App.css'
import { setSearchInput } from "../redux/reducer";
import Search from '../routes/search'

const myUrl = "http://localhost:3002"

function Navigation (props) {

    let navigate = useNavigate()
    
    let numberOfItems = 0
    if(props.items===undefined){
        numberOfItems = 0
    } else {
        numberOfItems = props.items.length
    }

    


let pathName = `${useLocation().pathname}`

    if(pathName==="/"){
    pathName='home'
    } else {
    pathName = pathName.substring(1)
    }


const handleSubmit=(event)=>{
    let input = event.target[0].value

    if(pathName==="search"){
        event.preventDefault()
        props.setSearchInput(input)
        return
    } 
    else {
        event.preventDefault()
        
        props.setSearchInput(input)
        // window.location.assign(myUrl+"/search")
        navigate('search')
        // props.setSearchInput(input)
    }
}

const isUserSignedIn = () => {
    if(props.signedInUser.authorized===true){
        return(
            <>
            <div> {props.signedInUser.username} </div>
            <button onClick={props.signedInUser("",false)}>sign out </button>
            </>
        )
    }
}




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
                        <div style={{display: 'flex'}}>
                        <form onSubmit={(event)=>handleSubmit(event)}><input placeholder="search..." id={`searchBar${pathName}`}></input></form>
                        <img src="https://i.imgur.com/O4yGO7H.png" id="lupaIcon"/>
                        </div>
                        <div id="loginAndRegisterContainer">
                            <Link to="/registration" className={`links${pathName}`} id="login">log in</Link>
                            <Link to="/registration" className={`links${pathName}`} id="register">register</Link>
                        </div>
                    </div>
            </div>
        </nav>
        </>
    )
}
const mapStateToProps = (state) =>{
   return {
    items: state.cart,
    input: state.input,
    signedInUser: { 
        username: state.signedInUser,
        authorized: state.signedInUser
    }
   } 
}

export default connect(mapStateToProps, {setSearchInput})(Navigation)