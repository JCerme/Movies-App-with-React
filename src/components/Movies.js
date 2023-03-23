/* https://api.simkl.com/movies/trending/?extended=overview,theater,metadata,tmdb,genres&client_id=dede2baa084f6ca15607fe847404a51ccc2e80f8f13003f80802d1e76f0b6521 */
import { useState, useEffect } from "react";

function Movies(){
    const [movies, setMovies] = useState([])

    let url = "https://api.simkl.com/movies/trending/?budget=1-1&release=1995-2025&langs=es&extended=overview,genres&wltime=today&client_id=dede2baa084f6ca15607fe847404a51ccc2e80f8f13003f80802d1e76f0b6521"
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <section id="content" className="content">
        {movies.map(movie => (
            <article className="peli-item" key={movie.ids.simkl_id}>
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.overview && movie.overview.length > 0 ? movie.overview : "Sin descripción..."}</p>
                <div className="buttons">
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </div>
            </article>
        ))}
        </section>
    )
}

export default Movies;