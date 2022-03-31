
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import '../App.css'

const MapCart = (props) => {
    const [products, setProducts] = useState([])
    let mappedProducts = undefined;

    useEffect(()=>{
    setProducts([props.items.cart])


    }, [props.items.cart]) 



// console.log(products[0].length)

if(products.length===0 || products[0].length===0 ){
    
    mappedProducts = (
    <div id="emptyCartContainer">
        <h1>Your cart is empty!</h1>
        <img src="https://i.imgur.com/J9m5uYC.png"></img>
    </div>
        )
        
    } else {
    mappedProducts = products[0].map((e,i)=>{
        
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
                    <div id="priceAndShippingTogetherContainer">
                        <p id="cartprice">{e.price}</p>
                        <p id="cartfreeShipping">+free shipping</p>
                    </div>
                </div>
                <h2>{  }</h2>
                {/* <button><h1>-</h1></button><button><h1>+</h1></button><button><h1>X</h1></button> */}
        </div>
        </div>
        })
    }
  
  
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
