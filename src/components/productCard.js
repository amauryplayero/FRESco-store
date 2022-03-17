import axios from 'axios'
import {useState, useEffect} from 'react'
import MapProducts from './mapProducts'
import '../App.css'
// import { getCds } from '../../server/controller'
const myUrl = "http://localhost:3001"


function ProductCards() {

const [soaps, setSoaps] = useState([])
const [cds, setCds] = useState([])

// console.log('productCards called')

const getSoaps = () =>{
    axios.get(myUrl+"/soaps").then(res =>{
        setSoaps(res.data)     
    })
}

    const getCds = () => {
     axios.get(myUrl+"/cds").then(res =>{
        setCds(res.data)       
     })
    
    }
    
    useEffect(()=>{
        getSoaps()
        getCds()
        }, [])
    // getSoaps()
    // getCds()

    return(
        <>
            <div>Soaps</div>
        <div  className="productsCardContainer">
      
        <MapProducts data={soaps}/>
        </div>

            <h1>Music</h1>
        <div className="productsCardContainer">
        <MapProducts data={cds}/>
        </div>

        <div  className="productsCardContainer">
            <h1>Shirts</h1>
        </div>

        </>

    )
}

export default ProductCards