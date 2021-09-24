import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, img, stock } = props.product

    return (

        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-title'>{name}</h4>
                <h5>By:{seller}</h5>
                <h4> Price:{price}</h4>
                <p>only <span className='stock'>{stock}</span>  left in stock - order soon</p>
                <button> Add to Cart</button>
            </div>
        </div>



    );
};

export default Product;