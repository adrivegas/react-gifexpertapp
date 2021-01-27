import React, { useState, useEffect } from 'react';

export const GifGrid = ( { category } ) => {

    const [count, setCount] = useState(0);

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

    }
    // getGifs();

    return (
        <div>
            <h3> { category} </h3>
            <h3> { count } </h3>
            <button onClick={ () => setCount( count + 1 )}></button>
            {/* cada vez que hago click react vuelve a ejecutar todo el componente porque detecta un cambio
             por eso usamos useEffect para que getGifs se ejecute solo una vez*/}
        </div>
    )
}
