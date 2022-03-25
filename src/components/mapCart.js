
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import '../App.css'

const MapCart = (props) => {
    const [products, setProducts] = useState([props.items.cart])
    
    // consol,e.log9
    useEffect(()=>{
    setProducts([props.items.cart])
    }, [props.items.cart]) 
    
    console.log(products)
    // let unique = [...new Set(products[0])]
    
    
    
    const mappedProducts = products[0].map((e,i)=>{
        
    return <div>
    <div key={e.product_id} id="soapCardInCart">
        <img src={e.image_url} alt="" id="imageIconInCart"/>
        <div id="infoAndButtonContainer">
            <div id="cartinfo">
                <h3 id="carttype">{e.type}</h3>
                <p id="cartname" >{e.name}</p>

            </div>
            {/* <button  id={e.product_id}>Add to cart</button> */}
        </div>
            <div id="priceAndShippingContainer">
                <p id="cartprice">{e.price}</p>
                <p id="cartfreeShipping">+free shipping</p>
            </div>
            <h2>{  }</h2>
            {/* <button><h1>-</h1></button><button><h1>+</h1></button><button><h1>X</h1></button> */}
    </div>
    </div>
    })

    // console.log(mappedProducts.length)
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
