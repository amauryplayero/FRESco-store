import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from "axios";
import '../App.css'
import Navigation from "../components/navigation";
import bcrypt from 'bcryptjs'
import { signInUser } from "../redux/reducer";

const salt = bcrypt.genSalt(10)
const myUrl = "http://localhost:3001"

function Registration (props){
    
    let navigate = useNavigate()
    
    const handleRegisterSubmit=(e)=>{
        e.preventDefault()
        let registrationData = {
            fullName: e.target[0].value,
            username: e.target[1].value,
            email: e.target[2].value,
            password: bcrypt.hashSync(e.target[3].value,bcrypt.genSaltSync()),  
        }

        //    alert('missing info mofogger')
       

        // axios.post(myUrl+'/registerUser', registrationData)
        // .then(res=>{
        //     console.log(res)
        // })
    
        // console.log(registrationData.password)


    }

    const handleSignInSubmit = (e) =>{
        e.preventDefault()
        let signInData = {
            username:`${e.target[0].value}`,
            password:`${e.target[1].value}`
        }

        axios.post(myUrl+'/logInUser', signInData)
        .then(res=>{
            console.log(res)
            if(res.data==='authorized'){
                console.log('congrats youre signed in')
                props.signInUser(`${e.target[0].value}`,true)
                navigate('/')
            } else {
                console.log('could not signed you in')
            }
        })

    }

   
    // const userSignedIn = props.signedInUser

    return(
        <>
       
        
        <form id="registerForm"onSubmit={(e)=>handleRegisterSubmit(e)}>
            register
            name
            <input></input>
            username
            <input></input>
            email
            <input></input>
            password
            <input type="password"></input>
            <input type="submit" value="Register!!!"></input>
         </form>


        <form id="signInForm"onSubmit={(e)=>handleSignInSubmit(e)}>
            sign in
                username
                <input></input>
                password
                <input type="password"></input>
                <input type="submit" value="sign in"></input>

        </form>
        </>


    )
}

const mapStateToProps = (state)=>{
    
    return {
        signedInUser: { 
            user: state.signedInUser,
            authorized: state.authorized
        }
    }
}

export default connect(mapStateToProps, {signInUser})(Registration)