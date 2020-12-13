import React, { useState, useEffect } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

import api from './services/api';

import './Global.css';
import './App.css';

import OrderItem from './components/OrderItem';
import OrderForm from './components/OrderForm';

function App() {
  const [orders, setOrders] = useState([]);  

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('/orders');

      setOrders(response.data);
    }

    loadDelivery();
  }, []);  

  async function handleAddDeliveryItem(data) {
    const response = await api.post('/orders', data);    

    setOrders([...orders, response.data]);
  }  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Entrega</strong>
          <OrderForm onSubmit={handleAddDeliveryItem} />
      </aside>
      
      <main>
        <ul>
          {orders.map(order => (
            <OrderItem key={order._id} order={order} />      
          ))}            
        </ul>
      </main> 
          
    </div>
    
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA4EBm1Fh3jJU1JuxrWqW1H7nC_Yje_KEM')
})(App)
