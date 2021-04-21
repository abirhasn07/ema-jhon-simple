import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // console.log(fakeData);
    const first20=fakeData.slice(0,20)
   const[product,setProducts]=useState(first20);
//    console.log(product);

//    card state 

const [cart,setCart]=useState([])

//    main btn event handler 
   const handleAddProduct=(product)=>{
    //    console.log('clicked',product)
       const newCart=[...cart,product]
       setCart(newCart)
   }
 


    return (
        <div className='shop-container'>
            <div className="product-container">
          
               {
                   product.map(product=>
                   <Product 
                   product={product}
                   handleProduct={handleAddProduct}
                   ></Product>)
               }
          
            </div>
            <div className="card-container">
               <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;