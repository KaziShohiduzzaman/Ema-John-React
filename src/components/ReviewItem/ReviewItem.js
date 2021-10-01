import React from 'react';

const ReviewItem = (props) => {
    const { img, name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div className="product-content">
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className='product-button'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;