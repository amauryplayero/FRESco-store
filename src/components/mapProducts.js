import { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { addItem, clearCart } from '../redux/reducer'
import '../App.css'


function MapProducts (props) {
    // console.log(props.items.cart)
 
    const addItem= (item) => {
        // item.quantity++
        props.addItem(item)
        
        // console.log(props.items.cart.includes(item))
        // if(props.items.cart.includes(item)===true){
        //     console.log(item)
        //     // add 1 to quantity on local state's cart (maybe a property)
        //     // props.addOneToQuantity()
        // } else {
            
        //     console.log(props.items.cart)
        // }
            
        
    }
    // console.log(products)
    useEffect(()=>{
        // setProducts(props.data)
    },[])
    // return(
    //     <>
        
    //     </>
    // )
   
    // console.log(product.product)
    
    const mapThroughThese = props.data.map((e,i)=>(
            
            <div id='soapContainer'>
            <div id="soapCard" key={e[i]}>
                 
                <img src={e.image_url} alt="" id="imageIcon"/>
                <div id="infoAndButtonContainer">
                    <div id="info">
                        <h3 id="type">{e.type}</h3>
                        <p id="name" >{e.name}</p>
                        <p id="price">{e.price}</p>
                        <p id="freeShipping">Free shipping</p>
                    <button  id={e.product_id} onClick={()=>
                        addItem(e)
                        } id="addToCartButton">Add to cart</button>
        
                    </div>
                </div>
            </div>
            </div>
            ))
            
            
        return (
            <>
            {mapThroughThese} 

            </>
        )
        // return props.data.product.map((e,i)=>(
            
        //     <div id='soapContainer'>
        //     <div id="soapCard" key={e.product_id}>
                 
        //         <img src={e.image_url} alt="" id="imageIcon"/>
        //         <div id="infoAndButtonContainer">
        //             <div id="info">
        //                 <h3 id="type">{e.type}</h3>
        //                 <p id="name" >{e.name}</p>
        //                 <p id="price">{e.price}</p>
        //                 <p id="freeShipping">Free shipping</p>
        //             <button  id={e.product_id} onClick={()=>
        //                 addItem(e)
        //                 } id="addToCartButton">Add to cart</button>
        
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        //     ))
    
}

const mapStateToProps = (state) =>{
    return {
       items: state
    }
}

export default connect(mapStateToProps, {addItem})(MapProducts)