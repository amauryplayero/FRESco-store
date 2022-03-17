
import {connect} from 'react-redux'
import { useEffect } from 'react'
import {addItem} from '../redux/reducer'
// import { showActiveCart } from '../redux/reducer'
import axios from 'axios'

const myUrl = "http://localhost:3001"
const mapThroughTheseItems = []
const MapCart = (props) => {

    console.log(props)
    const productIdsArray = props.items.cart
    
    // const mapFunction = ()=>{
    // for(let i=0; i<productIdsArray.length; i++){
    //      axios.put(myUrl+`/showCart/${productIdsArray[i]}`)
    //     .then(res=>{
    //         mapThroughTheseItems.push(res.data[0])
    //     })
    // }
    // }

    useEffect(()=>{
      
        
    }, []) 

    const mappedProducts = props.items.cart.map((e,i)=>{
    return <div id="soapCard" key={e.product_id} style={{border: 2+'px red solid', width: 90+'px'}}>
        <img src={e.image_url} alt="" style={{width:50+'px'}}/>
        <div id="infoAndButtonContainer">
            <div id="info">
                <h3 >{e.type}</h3>
                <p id="name" >{e.name}</p>
                <p id="price">{e.price}</p>
                <p id="freeShipping">free shipping</p>

            </div>
            <button  id={e.product_id} 
                >Add to cart</button>
        </div>
    </div>
 })
       
    
    
       
           
// console.log(mapThroughTheseItems)
    // console.log(mapThroughTheseItems)  
              


    return (
        <>
        <div>
       {
           mappedProducts
        }
       </div>
        </>


    )



}

const mapStateToProps = (state) => {
    return {
        items: state,
        // activeItemsInCart: state
    }
}

export default connect(mapStateToProps)(MapCart)
