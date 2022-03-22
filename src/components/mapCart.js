
import {connect} from 'react-redux'
import { useEffect } from 'react'
import {addItem} from '../redux/reducer'
// import { showActiveCart } from '../redux/reducer'
import axios from 'axios'
import '../App.css'
const myUrl = "http://localhost:3001"

const MapCart = (props) => {
    
    
    const product= props.items.cart
    // if(props.cart.product_id)
    console.log(props.items.product_id)

    useEffect(()=>{
        
    }, []) 
    
    let unique = [...new Set(product)]
    let quantity = 1
    console.log(unique)


    const mappedProducts = unique.map((e,i)=>{
        
    
    return <div>
    <div key={e.product_id} id="soapCardInCart">
        <img src={e.image_url} alt="" id="imageIconInCart"/>
        <div id="infoAndButtonContainer">
            <div id="info">
                <h3 >{e.type}</h3>
                <p id="name" >{e.name}</p>
                <p id="price">{e.price}</p>
                <p id="freeShipping">free shipping</p>

            </div>
            <button  id={e.product_id}>Add to cart</button>
        </div>
            <h2>{quantity}</h2>
            <button><h1>-</h1></button><button><h1>+</h1></button><button><h1>X</h1></button>
    </div>
    </div>
    })


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
