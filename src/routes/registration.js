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
       

        axios.post(myUrl+'/registerUser', registrationData)
        .then(res=>{
            console.log(res)
            window.location.reload(false)
        })
    
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
                alert('congrats youre signed in')
                props.signInUser(`${e.target[0].value}`,true)
                navigate('/')
            } else {
                alert('wrong password or username')
            }
        })

    }

   
   

    return(
        <>
        <button id="backButton" onClick={()=>navigate('/')}> back to store</button>
        <div id="generalContainer">
            <div class="formContainer">
                <form id="signInForm"onSubmit={(e)=>handleSignInSubmit(e)}>
                        <h1 id="signInH1">Sign in</h1>
                    <div class="textContainer">
                        <div>
                            <p>username</p>
                            <input></input>
                        </div>

                        <div>
                            <p>password</p>
                            <input type="password"></input>
                            <br/>
                            
                            <input type="submit" value="sign in"></input>
                        </div>
                    </div>
                </form>
            </div>


            <div class="formContainer">
                <form id="registerForm"onSubmit={(e)=>handleRegisterSubmit(e)}>
                        <h1 id="registerH1">Register</h1>
                    <div class="textContainer">
                        <div>
                        <p>name</p>
                        <input></input>
                        </div>

                        <div>
                        <p>username</p>
                        <input></input>
                        </div>

                        <div>
                        <p>email</p>
                        <input></input>
                        </div>

                        <div>
                        <p>password</p>
                        <input type="password"></input>
                        <br/>
                        <input type="submit" value="Register"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
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