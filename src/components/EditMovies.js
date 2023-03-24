import React from 'react';
import { useState } from 'react';
import { SaveStorage } from '../helpers/SaveStorage';

export const EditMovies = ({movieToEdit, getMovies, setEdit, setListState}) => {
    const [edittedMovie, setEdittedMovie] = useState({});

    function updateMovie(e, movieToEdit){
        e.preventDefault();

        const pelicula = {
            ids: {
                simkl_id: new Date().getTime()
            },
            title: e.target.title.value,
            overview: e.target.overview.value
        }

        setEdittedMovie(pelicula)
        
        const movies = getMovies();
        movies.map(movie => {
            if(movie.ids.simkl_id === movieToEdit.ids.simkl_id){
                movie.title = e.target.title.value;
                movie.overview = e.target.overview.value;
            }
        })

        setListState(movies);
        SaveStorage('Movies', JSON.stringify(movies));
        setEdit(0)
    }

    return (
        <div className='editMovieForm'>
            <h3>Edit Movie</h3>
            <form onSubmit={(e) => updateMovie(e, movieToEdit)}>
                <input type="text" id="title" name="title" defaultValue={movieToEdit.title} />
                <textarea id="overview" rows="6" name="overview" defaultValue={movieToEdit.overview}></textarea>
                <button type="submit" name="submit" id="save">Guardar</button>
            </form>
        </div>
    );
}