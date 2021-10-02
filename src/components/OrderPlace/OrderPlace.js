import React from 'react';
import img from '../../images/giphy.gif'
const OrderPlace = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Successfully you Place your order.</h3>
            <h3>Now you have to pay on Bkash for confirmation message.</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default OrderPlace;