import React from 'react';

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
                <strong>Endereço de Partida</strong>
                <p>{order.startPoint}</p>
                <strong>Endereço de Entrega</strong>
                <p>{order.endPoint}</p>                
            </div>  

            <div className="buttons">
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com.br/maps/dir/${order.startPoint}/${order.endPoint}`}>Rotas</a>                  
            </div>                    
        </li>
    )
}

export default OrderItem;
