import axios from 'axios'
import {useState, useEffect} from 'react'
import MapProducts from './mapProducts'
import '../App.css'

const myUrl = "https://624661b5ae6ce00008f2990d--jazzy-gnome-eaf65f.netlify.app"


function ProductCards() {
  

const [soapsState, setSoapsState] = useState([])
const [cds, setCds] = useState([])
const [shirts, setShirts] = useState([])


const getSoaps = () =>{
    axios.get(`${myUrl}/soaps`).then(res =>{
        let soaps = []
        let product = res.data
        // console.log(product)
        for(let i =0; i<res.data.length; i++){
        soaps.push({...res.data[i], quantity: 0})   
        }  
        setSoapsState(soaps)
    })
}
    
    const getCds = () => {
        axios.get(`${myUrl}/cds`).then(res =>{
            let cds = []
            let product = res.data
            // console.log(product)
            for(let i =0; i<res.data.length; i++){
            cds.push({...res.data[i], quantity: 0})   
            }  
            setCds(cds)
          
            
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
            <div className="sectionTitle"><h3>Soaps</h3></div>
        <div  className="productsCardContainer">
      
        <MapProducts data={soapsState}/>
        </div>

        <div className="sectionTitle"><h3>Music</h3></div>
        <div className="productsCardContainer">
        <MapProducts data={cds}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

        {/* <div className="sectionTitle"><h3>Shirts</h3></div>
        <div>
            <h1>Shirts</h1>
        
        </div> */}
       
        </>

    )
}

export default ProductCards