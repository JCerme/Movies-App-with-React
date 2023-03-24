import React from 'react';
import { useState } from 'react';
import { SaveStorage } from '../helpers/SaveStorage';

const AddMovies = ({setListState}) => {
    const [newMovie, setMovies] = useState({
        title: '',
        overview: '',
    })
    
    function addMovie(e){
        e.preventDefault();

        const pelicula = {
            ids: {
                simkl_id: new Date().getTime()
            },
            title: e.target.title.value,
            overview: e.target.overview.value
        }

        setMovies(newMovie)     // guardar estado
        setListState( movies => [pelicula, ...movies]) // guardar estado principal
        const movies = JSON.parse(JSON.parse(localStorage.getItem('Movies')));
        movies.unshift(pelicula);
        SaveStorage('Movies',JSON.stringify(movies))  // guardar en LocalStorage

        e.target.title.value = '';
        e.target.overview.value = '';
    }
    

    return (
        <div className="add">
            <h3 className="title">Añadir pelicula:</h3>
            <form onSubmit={addMovie}>
                <input type="text" id="title" name="title" placeholder="Titulo" />
                <textarea id="overview" name="overview" placeholder="Descripción"></textarea>
                <button type="submit" name="submit" id="save">Guardar</button>
            </form>
            <span className="successNewMovie">
            {(newMovie && newMovie.title!=="" && newMovie.overview!=="" && newMovie.id!=="")
            && "Has añadido la película: " + newMovie.title }
            </span>
        </div>
    )
}

export default AddMovies;