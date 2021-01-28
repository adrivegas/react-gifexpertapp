import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    // con [] useEffect solo se va a disparar una vez
    // solo se ejecuta getGifs() cuando el componente es renderizado por primera vez

    useEffect(() => {
        getGifs( category )
            .then( setImages );
    }, [ category ]); // [ category ] si la categoría cambia entonces va a volver a ejecutar useEffect y disparar esa petición http

    return (
        <>
            <h3> { category} </h3> 
            <div className= 'card-grid'>                
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            {...img}
                        />                        
                    ))
                }
            </div>
        </>        
    )
}
