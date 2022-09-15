import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'

function Banner() {
    const [firstMovie, setFirstMovie] = useState("");


    useEffect(function () {
        let response = fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=2d05d1919e5c2de0fde7c689bb045d11")
            .then(response => response.json())
            .then(data => {
                setFirstMovie(data.results[0])
            })
    }, [])

    return (
        <>
            {firstMovie == "" ? <h4>Retrieving...</h4> :
                <>
                    <h2>{firstMovie.original_title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path}
                        className="banner_img" />
                </>
            }
        </>
    )
}

export default Banner