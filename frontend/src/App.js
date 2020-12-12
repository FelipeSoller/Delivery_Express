import React from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Entrega</strong>
        <form>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input name="name" id="name" required />
          </div>

          <div className="input-block">
            <label htmlFor="delivery_date">Data da Entrega</label>
            <input name="delivery_date" id="delivery_date" required />
          </div>

          <div className="input-block">
            <label htmlFor="start_point">Endereço de Partida</label>
            <input name="start_point" id="start_point" required />
          </div>

          <div className="input-block">
            <label htmlFor="end_point">Endereço da Entrega</label>
            <input name="end_point" id="end_point" required />
          </div>  

          <button type="submit">Salvar</button>      
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="delivery-item">
            <header>
              <div className="delivery-info">
                <strong>Nome do Delivery</strong>
                <span>Data do Delivery</span>                
              </div>
            </header>

            <div className="address-info">
              <p>Endereço de Partida</p>
              <p>Endereço da Entrega</p>
            </div>            
          </li>

          <li className="delivery-item">
            <header>
              <div className="delivery-info">
                <strong>Nome do Delivery</strong>
                <span>Data do Delivery</span>                
              </div>
            </header>

            <div className="address-info">
              <p>Endereço de Partida</p>
              <p>Endereço da Entrega</p>
            </div>            
          </li>

          <li className="delivery-item">
            <header>
              <div className="delivery-info">
                <strong>Nome do Delivery</strong>
                <span>Data do Delivery</span>                
              </div>
            </header>

            <div className="address-info">
              <p>Endereço de Partida</p>
              <p>Endereço da Entrega</p>
            </div>            
          </li>

          <li className="delivery-item">
            <header>
              <div className="delivery-info">
                <strong>Nome do Delivery</strong>
                <span>Data do Delivery</span>                
              </div>
            </header>

            <div className="address-info">
              <p>Endereço de Partida</p>
              <p>Endereço da Entrega</p>
            </div>            
          </li>
        </ul>
      </main>      
    </div>
  );
}

export default App;
