import { useState, useEffect } from "react";
import { SaveStorage } from "../helpers/SaveStorage";
import { EditMovies } from "./EditMovies";

const ListMovies = ({listState, setListState}) => {
    let url = "https://api.simkl.com/movies/trending/?budget=1-1&release=1995-2025&langs=es&extended=overview,genres&wltime=today&client_id=dede2baa084f6ca15607fe847404a51ccc2e80f8f13003f80802d1e76f0b6521"
    const [ edit, setEdit ] = useState(0);

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getMovies(){
        const local = JSON.parse(JSON.parse(localStorage.getItem("Movies")));
        if(local && local.length > 0){
            setListState(local);
            return local;
        } else {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setListState(data)
                SaveStorage("Movies",JSON.stringify(data))
                return data;
            })
        }
    }

    function RemoveMovie(movieId){
        const movies = listState;
        const newArrayMovies = movies.filter(movie => movie.ids.simkl_id !== movieId)
        SaveStorage('Movies',JSON.stringify(newArrayMovies))
        setListState(newArrayMovies)
    }    

    return (
        <>
        { listState && listState.length > 0 ?
            listState.map(movie => (
                <article className="peli-item" key={movie.ids.simkl_id}>
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.overview && movie.overview.length > 0 ? movie.overview : "Sin descripción..."}</p>
                    <div className="buttons">
                        <button className="edit" onClick={() => setEdit(movie.ids.simkl_id)}>Editar</button>
                        <button className="delete" onClick={() => RemoveMovie(parseInt(movie.ids.simkl_id))}>Borrar</button>
                    </div>
                    {edit===movie.ids.simkl_id && (
                       <EditMovies movieToEdit={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState} />
                    )}
                </article>
            ))
            : <h2 style={{color:'white', textAlign:'left'}}>No hay películas para mostrar. Actualiza la página para añadir unas por defecto...</h2>
        }
        </>
    )
}

export default ListMovies;