import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Adri')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario (refresh navegador)
        console.log('Submit ok');
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
