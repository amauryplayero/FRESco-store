import Navigation from '../components/navigation'
import "../App.css"
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MapProducts from '../components/mapProducts'

const myUrl = "http://localhost:3001"

function Search (props) { 

    const [filteredProducts, setFilteredProducts] = useState([])

    let inputFromState = {input:props.input}
    if(inputFromState===undefined){
        inputFromState='undefined asfuck'
    }
    // console.log(inputFromState)
    const handleSearch = () =>{
        if(filteredProducts===[]){

            return(
                <div>no such products</div>
            )
        } else {
            return
        }
    }
    let mounted = false
    useEffect(()=>{
        if(mounted===false){
            axios.post(`${myUrl}/searchItem`,inputFromState)
            .then(res=>{
            let productsToMap = res.data
           
            setFilteredProducts(productsToMap)
            
            
            mounted = true
            })
        } else {
            return mounted = false
        }
       

       }, [inputFromState])




    return (
        <>
        <Navigation />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="searchedContainer">
            <h1>searched: "{props.input}"</h1>
            <div id="resultsFromSearchContainer">
                <MapProducts data={filteredProducts}/>
            </div>
        </div>
        
       
        </>


    )







}
const mapStateToProps = (state) =>{
    return {
     items: state.cart,
     input: state.input
    } 
 }
 
 export default connect(mapStateToProps)(Search)
