import React, { useState, useEffect } from 'react';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    // con [] useEffect solo se va a disparar una vez
    // solo se ejecuta getGifs() cuando el componente es renderizado por primera vez

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {

        // LLamado al endpoint
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=gCEDZSwRmh8Xvfrwo4wSah1ZQHPZQq9q';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs );

    }  

    return (
        <div>
            <h3> { category} </h3>     
            <ol>
                {
                    images.map( ({ id, title }) => (
                        <li key={ id }> { title } </li>                        
                    ))
                }
            </ol>       
        </div>
    )
}
