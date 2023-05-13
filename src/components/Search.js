import React from 'react';
import { useState, useEffect } from 'react';

function Search({setListState}) {
    const [toSearch, setToSearch] = useState('');

    useEffect(()=>{
        const movies = JSON.parse(JSON.parse(localStorage.getItem('Movies')));
        if(toSearch){
            const movieSearch = toSearch.toLowerCase();
            const newArrayMovies = movies.filter(movie => movie.title.toLowerCase().includes(movieSearch))
            setListState(newArrayMovies)
        } else {
            setListState(movies)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toSearch])

    return (
        <div className="search">
            <h3 className="title">Buscador:</h3>
            <form>
                <input type="text" id="search_field" onChange={(e) => setToSearch(e.target.value)} placeholder="Busca aquí tu película..."/>
            </form>
            {toSearch && <span className="searchSpan">Estás buscando la película: {toSearch}</span>}
        </div>
    )
}

export default Search;