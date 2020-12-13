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
            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com.br/maps/dir/${order.startPoint}/${order.endPoint}`}>Ver rotas no Google Maps</a>
            </div>            
        </li>
    )
}

export default OrderItem;
