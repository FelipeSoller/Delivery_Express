import React, { useState } from 'react';

import {GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');  


  const handleChangeStartPoint = startPoint => {
    setStartPoint(startPoint);
  };

  const handleChangeEndPoint = endPoint => {
    setEndPoint(endPoint);
  };  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Entrega</strong>
        <form>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input name="name" id="name" placeholder="Digite o nome do destinatário" required />
          </div>

          <div className="input-block">
            <label htmlFor="delivery_date">Data da Entrega</label>
            <input type="date" name="delivery_date" id="delivery_date" required />
          </div>          

          <PlacesAutocomplete
          value={startPoint}
          onChange={handleChangeStartPoint}          
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (            
            <div className="input-block">
              <label htmlFor="start_point">Endereço de Partida</label>
              <input name="start_point" id="start_point" required
                {...getInputProps({
                  placeholder: 'Digite o endereço de onde o produto será enviado',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <PlacesAutocomplete
          value={endPoint}
          onChange={handleChangeEndPoint}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="input-block">
              <label htmlFor="end_point">Endereço de Entrega</label>
              <input name="end_point" id="end_point" required
                {...getInputProps({
                  placeholder: 'Digite o endereço de onde o produto será entregue',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>  

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

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA4EBm1Fh3jJU1JuxrWqW1H7nC_Yje_KEM')
})(App)
