import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gamora', 'Iron Man', 'Thor']);

    const handleAdd = () => {
        // setCategories([...categories, 'Visión']);
        // También lo puedo hacer con un callback, devolviendo un nuevo arreglo con todas las categorías
        setCategories(cats => [...cats, 'Visión']); 
    };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>

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
