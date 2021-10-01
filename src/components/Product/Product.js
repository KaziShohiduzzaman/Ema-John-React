import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { img, name, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div className="product-content">
                <h4>{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star star"
                    fullSymbol="fas fa-star star"
                />
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className='product-button'>{element}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;