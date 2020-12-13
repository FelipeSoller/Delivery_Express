import React, { useState }from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

import './styles.css';

function OrderForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [inputDate, setDate] = useState(new Date());
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState(''); 

    const handleChangeStartPoint = startPoint => {
        setStartPoint(startPoint);
      };
    
      const handleChangeEndPoint = endPoint => {
        setEndPoint(endPoint);
      };

    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            name,
            inputDate,
            startPoint,
            endPoint
        });

        setName('');
        setDate(new Date());
        setStartPoint('');
        setEndPoint('');
    }

    return (        
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input 
                name="name" 
                id="name" 
                placeholder="Digite o nome do destinatário" 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="delivery_date">Data da Entrega</label>
                <DatePicker              
                selected={inputDate}
                onChange={date => setDate(date)}
                dateFormat='dd/MM/yyyy'              
                />
            </div>          

            <PlacesAutocomplete
            value={startPoint}
            onChange={handleChangeStartPoint}          
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (            
                <div className="input-block">
                <label htmlFor="start_point">Endereço de Partida</label>
                <input 
                    name="start_point" 
                    id="start_point" 
                    required 
                    value={startPoint}
                    onChange={e => setStartPoint(e.target.value)}
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
                <input 
                    name="end_point" 
                    id="end_point" 
                    required 
                    value={endPoint}
                    onChange={e => setEndPoint(e.target.value)}
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
    )
}

export default OrderForm;
