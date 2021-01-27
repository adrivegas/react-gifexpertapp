import React from 'react'

export const GifGrid = ( { category } ) => {

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

        console.log(data);
        console.log(gifs);

    }
    getGifs();

    return (
        <div>
            <h3> {category} </h3>
        </div>
    )
}
