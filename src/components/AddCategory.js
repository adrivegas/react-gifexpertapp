import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario (refresh navegador)

        if ( inputValue.trim().length > 2 ) {
            setCategories(cats => [ inputValue, ...cats ]); // cambiamos el orden para que primero inserte la nueva y luego las anteriores
            setInputValue(''); // Borra el valor del input para que no pueda hacer un doble posteo
        }         
    }

    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
   
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
