import React, { useState } from 'react';

export const GifExpertApp = () => {

    // const categories = ['Gamora', 'Iron Man', 'Thor']. *****Así no se debe hacer****
    const [categories, setCategories] = useState(['Gamora', 'Iron Man', 'Thor']);

    // ... con el operador spread mantengo las categorías anteriores y agrego una nueva
    const handleAdd = () => {
        // setCategories([...categories, 'Visión']);
        // También lo puedo hacer con un callback, devolviendo un nuevo arreglo con todas las categorías
        setCategories(cats => [...cats, 'Visión']); 
    };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick= { handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key= { category }> {category} </li>
                    })
                }
            </ol>
        </div>
    )
}
