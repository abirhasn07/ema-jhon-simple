import React from 'react';

const Cart = (props) => {
    const cart=props.cart
    // console.log(cart);
    let price=0;
    let singleItemPrice=0;
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        console.log(product);
       price=price+ product.price
       console.log(product.price);

       singleItemPrice=(product.price)
   
    }
    let shipping = 0;
   
    if(singleItemPrice>1 && singleItemPrice<50){
        shipping=15.99
    }
    if (singleItemPrice>200) {
        shipping=5.99
    }
    
//   



 const tax =(price/10).toFixed(2);

 const grandTotal=(price+shipping+Number(tax)).toFixed(2)

    return (
        <div>
             <h1>Oder Summery</h1>
                <h5>Item Oder :{cart.length}</h5>
                 <p>Item Price: {singleItemPrice}</p>
                <small>Shipping:{shipping}</small> <br></br>
                <small>Tax: {tax}</small>
                <p>Total:{grandTotal}</p>

        </div>
    );
};

export default Cart;