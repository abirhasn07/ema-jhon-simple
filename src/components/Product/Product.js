import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
	// console.log(props);
const{img,name,seller,price,stock,}=props.product
	return (
		
	
		<div className="product-main">
	
            <div className="img-container">
		
				<img src={img} alt="" />
			</div>

			<div className="info-container">
				<h5>{name}</h5>
               
                <h5>By : {seller}</h5>
                 <h4>${price}</h4>
                 <h5>Only {stock} left in stock</h5>
                <button className='hero-btn' onClick={()=>props.handleProduct(props.product) }> <FontAwesomeIcon icon={faShoppingCart} />Add to card</button>
			</div>

            </div>
		
	);
};

export default Product;
