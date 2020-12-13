import React from 'react'

import './styles.css';

function OrderItem({ order }) {     
    
    return (
        <li className="delivery-item">
            <header>
            <div className="delivery-info">
                <strong>{order.name}</strong>
                <span>{order.inputDate}</span>                
            </div>
            </header>

            <div className="address-info">
            <p>{order.startPoint}</p>
            <p>{order.endPoint}</p>
            </div>            
        </li>
    )
}

export default OrderItem;
